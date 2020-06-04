
import {listen,trigger, effect} from "./reactivity/effect.js"
import {computed} from "./reactivity/computed.js"
const reactive = (target)=>{
    const observed = new Proxy(target, baseHandler)
    return observed
}


let baseHandler = {
    get: createdGetter(),
    set: createSetter()
}

function createdGetter(){
    return function get(target, key, receiver){
        const res = Reflect.get(target, key);
        // 如果是计算属性，计算属性返回的是一个对象
        console.log('----------------------------')
        console.log(res)
        if(res.__v_isRef){
            return res.value
        }
        listen(target, key)
        return isObject(target) ? reactive(res) : res
    }
}

function createSetter(){
    return function set(target, key, value, receiver){
        const oldValue = Reflect.get(target, key);
        let result = Reflect.set(target, key, value, receiver)
        trigger(target, key)
        return result
    }
}

// let activeEffect
// function effect (fn, option = {}){
//     let effect = createReactiveEffect(fn);
//     // 一共有三处使用effect： mount，watch，computed
//     // watch 和 computed的lazy为true
//     if(!option.lazy){
//         effect();
//     }
//     return effect
// }

// // let effectStack = []
// function createReactiveEffect(fn){
//     let effect = function reactiveEffect(){
//         // if (!effectStack.includes(effect))
//         try{
//             // effectStack.push(effect)
//             activeEffect = effect
//             fn()
//         } finally {
//             // activeEffect = null
//             // effectStack.pop(effect)
//             // activeEffect = effectStack[effectStack.length-1]
//         }
//     } 
//     effect.deps = [];
//     effect.raw = fn;
//     return effect
// }

let isObject = (v)=>{
    typeof v === 'object'
}

export {
    reactive,
    effect,
    computed
}

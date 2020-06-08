
import {listen,trigger, effect} from "./effect.js"
export {computed} from "./computed.js"
export const reactive = (target)=>{
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

export let isObject = (v)=>{
    typeof v === 'object'
}
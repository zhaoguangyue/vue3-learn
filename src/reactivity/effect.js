

function effect(fn, options){
    const effect = createReactiveEffect(fn, options);
    if(!options.lazy){
        effect();
    }
    return effect
}

let effectStack = []
function createReactiveEffect(fn, options){
    let effect = function reactiveEffect(){
        
        fn();
    }
    effect.computed = false,
    effect.deps = [];
    effect.raw = fn
    effect.options = options;
}




// 发布订阅
let targetMap = new WeakMap();
function listen(target, key, fn){
    let depsMap = targetMap.get(target);
    if (!depsMap){
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }
    let deps = depsMap.get(key);
    if(!deps) {
        deps = new Set();
        depsMap.set(key, deps);
    }

    if(!deps.has(fn)){
        deps.add(fn)
    }
}

function trigger(target, key){
    let depsMap = targetMap.get(target);
    if(!depsMap){
        return 
    }
    let deps = depsMap.get(key);
    deps && deps.forEach(effect=>{
        effect();
    })
}

export {
    listen,
    trigger
}
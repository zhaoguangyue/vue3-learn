
let activeEffect;
function effect(fn, options = {computed: false}){
    const effect = createReactiveEffect(fn, options);
    if(!options.lazy){
        effect();
    }
    return effect
}

let effectStack = []
function createReactiveEffect(fn, options){
    let effect = function reactiveEffect(){
        if(!effectStack.includes(effect)){
            try{
                effectStack.push(effect)
                activeEffect = effect
                return fn();
            } finally {
                effectStack.pop();
                activeEffect = effectStack[effectStack.length - 1]
            }
        }
    }
    effect.deps = [];
    effect.raw = fn
    effect.options = options;
    return effect
}




// 发布订阅
let targetMap = new WeakMap();
function listen(target, key){
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

    if(!deps.has(activeEffect)){
        deps.add(activeEffect)
    }
}

function trigger(target, key){
    let depsMap = targetMap.get(target);
    if(!depsMap){
        return 
    }
    let deps = depsMap.get(key);
    let computedRunners = [];
    let effects = [];

    deps && deps.forEach(effect=>{
        if (effect !== activeEffect) {
            if (effect.options.computed) {
                computedRunners.push(effect)
            } else {
                effects.push(effect)
            }
        }
    })
    function run(effect){
        if(effect.options.scheduler){
            effect.options.scheduler()
        } else {
            effect();
        }
    }
    computedRunners.forEach(run)
    effects.forEach(run)
}

export {
    effect,
    listen,
    trigger
}
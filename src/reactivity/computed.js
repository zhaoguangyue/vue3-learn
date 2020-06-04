
/**
 * 
 * @param {*} getterOrOption 
 * 一个getter 或者 { get(){}, set(){} }
 * 使用
 * var countAdd = computed(()=>{state.count++})
 * var countAdd = computed({
 *  get(){}
 *  set(val){}
 * })
 */
import {effect, listen, trigger} from "./effect.js"
export function computed(getterOrOption){
    let getter, setter;
    if(typeof getterOrOption === 'function'){
        getter = getterOrOption;
        setter = () => {}
    }else {
        getter = getterOrOption.get;
        setter = getterOrOption.set;
    }

    // value 需要缓存
    let value;
    let dirty = true;

    const runner = effect(getter, {
        lazy: true, //创建一个effect，但是不立即执行
        computed: true, //标记该effect为计算属性的
        // 为该effect添加scheduler，在订阅发布器，进行发布的时候，就不会执行getter，而是执行scheduler函数
        scheduler(){
            if(!dirty){
                dirty = true
                trigger(computed, 'value')
            }
        }
    })
    const computed = {
        __v_isRef: true, //标记为计算属性，计算属性，最终返回的是一个对象，所以应该返回computed.value
        effect: runner,
        // 计算属性 缓存需要实现
        get value(){
            // dirty为true，就重新计算value
            if(dirty){
                // 运行getter, 
                value = runner()
                dirty = false
            }
            // 订阅该计算属性
            listen(computed, 'value');
            return value
        },
        set value(newVal){
            setter(newVal)
        }
    }

    return computed
}
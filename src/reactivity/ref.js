
import {isObject, reactive} from "./reactive.js"
import {track, trigger} from "./effect.js"

const convert = (v)=>isObject(v) ? reactive(v) : v
export const isRef = (v)=> v ? v.__v_isRef === true : false

export function ref(){
    return createRef(value)
}

function createRef(value) {
    let value = convert(value);
    if(isRef(value)){
        return value
    }
    const ref = {
        __v_isRef: true,
        get value(){
            track(ref, 'value')
            return value
        },

        set value(newValue ){
            if(newValue === value) return;
            value = convert(newValue);
            trigger(raw, 'value')
        }
    }

    return ref
}
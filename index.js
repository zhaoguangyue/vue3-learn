import {vue, createApp} from "./src"
console.log(vue)
console.log(createApp)
window.vue = vue

function aa(){
    console.log(123)
    var a = new Promise((resolve)=>{
        console.log('aapromise')
        resolve()
    })
    a.then(()=>{
        console.log('aa的then')
    })
}
function bb(){
    console.log(12222)

    var a = new Promise((resolve)=>{
        console.log('bbpromise')
        resolve()
    })
    a.then(()=>{
        console.log('bb的then')
    })
}

aa()
bb()
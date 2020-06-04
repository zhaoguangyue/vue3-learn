import {Vue} from '../../vue3-code-learn/packages/vue/dist/vue.global'
const {createApp, reactive, createVNode } = Vue

console.log(Vue)
const app = {
    template: `
        <div>
                {{state.count}}
                <button @click="handlerClick">点击</button>
        </div>`,
    setup() {
        const state = reactive({
            count:12345
        })
        const handlerClick = ()=>{
            state.count++
        }
        return {
            state,
            handlerClick
        }
    }
}
var proxy = createApp(app).mount('#app')
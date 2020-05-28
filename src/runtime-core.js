export const getApp = (rootComponent, props = mnull)=>{
    return {
        _component:rootComponent,
        _props: props,
        _container: null,
        _context: context,
        use: ()=>{
            console.log('使用vue插件')
        },
        mixin: ()=>{
            console.log('mixin')
        },
        component: ()=>{
            console.log('component')
        },
        directive: ()=>{
            console.log('directive')
        },
        mount: ()=>{
            console.log('mount')
        },
        unmount: ()=>{
            console.log('unmount')
        },
        provide: ()=>{
            console.log('provide')
        },

    }
}

export const createApp = (...args) => {
    const app = ensureRenderer().createApp(...args)
  
    const { mount } = app
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector)
        return mount(container)
    }
    return app
}  

export function createRenderer(options) {
  return baseCreateRenderer(options)
}
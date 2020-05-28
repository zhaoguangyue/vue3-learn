export const vue = {

}
import {getApp} from "./runtime-core"
export const createApp = (...args)=>{
    let app = getApp();
    app.mount()
    return app
}
class Store {
    constructor(fn) {
        this.fn = fn
        this.state = this.fn({},{type:''})
        this.cbQueue = []
    }
    dispatch(action) {
        this.state = this.fn(this.state,action)
        this.cbQueue.forEach((cb)=>{
            cb()
        })
    }
    subscribe(cb) {
        this.cbQueue.push(cb)
    }
    getState() {
        return this.state
    }
}
const createStore =(fn)=>{
    const store = new Store(fn)
    return store
}
export default Store
export {createStore}

import createStore from 'unistore'

let store = createStore({
    user: null,
    isAuth: false
})
store.subscribe(console.log)

export default store;
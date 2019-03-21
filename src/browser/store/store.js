import createStore from 'unistore'

export const configureStore = initialState => {
    const store = createStore(initialState);
    return store;
}
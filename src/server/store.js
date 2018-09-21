import createStore from 'unistore';

export default async req => {
  const store = createStore({
    auth: {
      user: null,
      isAuth: false
    },
    activeBooks:{
      data: []
    }
  })
  if (req.user)
    store.setState({
      auth: {
        isAuth: true,
        user: req.user
      }
    })
  return store;
};
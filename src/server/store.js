import createStore from 'unistore';

export default async req => {
  const store = createStore({
    isAuth: false,
    user: null
  })
  if(req.user)
    store.setState({
      isAuth: true,
      user: req.user
    })
  return store;
};

import localStrategy from "./localStrategy";
import googleStrategy from "./googleStrategy";
import User from '../../models/User';

export default passport => {
  passport.serializeUser((user, done)=> {
    done(null, user._id);
  });

  passport.deserializeUser((id, done)=> {
    User.findById(id, (err, user)=> {
      done(err, user);
    });
  });

  passport.use(localStrategy);
  passport.use(googleStrategy);
};

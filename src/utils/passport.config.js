import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import UsersModel from "../database/users.model.js";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new Strategy(options, async function (jwt_payload, done) {
    try {
      const user = await UsersModel().getById(jwt_payload.id);
      delete user.password;
      delete user.createdat;
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (e) {
      return done(e);
    }
  })
);

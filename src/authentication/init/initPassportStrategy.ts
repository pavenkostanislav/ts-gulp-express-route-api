import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { config } from '../../services/config';
import { IContext } from '../../tools/context';
import { authenticationCall } from './authenticationCall';

export function initPassportStrategy(): void {
  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser(async (user: any, done) => {
    await authenticationCall(async (context: IContext) => {
      context.log.debug('Passport', 'got user from session', user);
      // #todo const actualUser = await authenticationApi(context).getAuthenticatedUser(user);
      done(null, user);
    }, done);
  });

  if (config.auth.backDoor) {
    passport.use('backdoor', new LocalStrategy({
      usernameField: 'user',
      passwordField: 'password',
      passReqToCallback: true
    },
      (req, email, password, done) => authenticationCall(async (context) => {
        const user = req.query;
        context.log.info('Passport', 'User login', user);
        done(null, user);
      }, done)));
  }
}

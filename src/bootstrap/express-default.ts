import * as bodyParser from 'body-parser';
import * as compress from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as expressSession from 'express-session';
import * as helmet from 'helmet';
import * as methodOverride from 'method-override';
import * as passport from 'passport';
import { Express } from 'express';
import { config } from '../services/config';

export function ExpressDefault(app: Express): void {
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  app.use(cookieParser());
  app.use(compress());
  app.use(methodOverride());
  app.use(helmet());
  app.use(cors({ credentials: true, origin: true }));
  const sessionOptions: expressSession.SessionOptions = {
    name: config.session.name,
    secret: config.session.secret,
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
      maxAge: config.session.cookie.maxAge
    }
  };

  app.use(expressSession(sessionOptions));

  app.use(passport.initialize());
  app.use(passport.session());
}

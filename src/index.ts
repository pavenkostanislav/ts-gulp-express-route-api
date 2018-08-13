import * as express from 'express';
import * as http from 'http';
import { Controllers } from './bootstrap/controllers';
import { ExpressDefault } from './bootstrap/express-default';
import { config } from './services/config';

export const app = express();

app.set('domain', config.app.host);
app.set('port', config.app.port);

ExpressDefault(app);
Controllers(app);

http.createServer(app).listen(config.app.port);

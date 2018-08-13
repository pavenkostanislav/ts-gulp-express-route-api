import * as express from 'express';
import * as http from 'http';
import { Controllers } from './bootstrap/controllers';
import { ExpressDefault } from './bootstrap/express-default';
import { config } from './services/config';
import { logger } from './tools/logger/logger';

export const app = express();

app.set('domain', config.app.host);
app.set('port', config.app.port);

ExpressDefault(app);
Controllers(app);

http.createServer(app).listen(config.app.port, () => {
    logger.debug('Init', `API app started listen ${config.app.port} port`);
});

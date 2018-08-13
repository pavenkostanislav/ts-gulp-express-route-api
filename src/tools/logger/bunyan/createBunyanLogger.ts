
import * as bunyan from 'bunyan';
import { Logger } from '../logger.interface';
import { createBunyanConfig } from './createBunyanConfig';
import { LogSource } from '../logSource';

export function createBunyanLogger(): Logger {
  const logger = bunyan.createLogger(createBunyanConfig());
  const result: Logger = {
    info: (source: LogSource, message: string, ...params: any[]) => logger.info({ source }, message, ...params),
    debug: (source: LogSource, message: string, ...params: any[]) => logger.debug({ source }, message, ...params),
    error: (source: LogSource, error: any, ...params) => {
      error.code
        ? logger.error({ source }, `Error ${error.code}, ${error.message} `, error, ...params)
        : logger.error({ source }, error, ...params);
    }
  };

  result.info('Init', 'Logger created');
  return result;
}

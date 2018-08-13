import { createBunyanLogger } from './bunyan/createBunyanLogger';
import { Logger } from './logger.interface';
import { createEmptyLogger } from './empty/createEmptyLogger';
import { config } from '../../services/config';

function createLogger(): Logger {
  switch (config.log.logger) {
    case 'bunyan':
      return createBunyanLogger();
    default:
      return createEmptyLogger();
  }
}

export const logger = createLogger();

import { Logger } from '../logger.interface';

export function createEmptyLogger(): Logger {
  return {
    info: () => { },
    debug: () => { },
    error: () => { }
  };
}

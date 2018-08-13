import { LogSource } from './logSource';

export interface Logger {
  debug(source: LogSource, message: string, ...params: any[]): void;
  info(source: LogSource, message: string, ...params: any[]): void;
  error(source: LogSource, err: any, ...params: any[]): void;
}

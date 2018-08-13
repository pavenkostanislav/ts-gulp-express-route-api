import { IContext } from './context';
import { Logger } from './logger/logger.interface';
import { createBunyanLogger } from './logger/bunyan/createBunyanLogger';

export class Context implements IContext {
  public log: Logger;
  constructor(public user: any) {
    this.log = createBunyanLogger();
  }
}

export function createContext(user: any): IContext {
  const context = new Context(user);
  return context;
}

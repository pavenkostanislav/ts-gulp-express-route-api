import { IContext } from './context';

export class Context implements IContext {
  public log: any;
  constructor(public user: any) {
  }
}

export function createContext(user: any): IContext {
  const context = new Context(user);
  return context;
}

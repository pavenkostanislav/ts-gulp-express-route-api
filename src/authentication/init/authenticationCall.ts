import { IContext } from '../../tools/context';
import { logger } from '../../tools/logger/logger';
import { createContext } from '../../tools/createContext';

export type Call = (context: IContext) => Promise<void>;
export type Done = (error: any) => void;

export async function authenticationCall(method: Call, done: Done): Promise<void> {
  try {
    const context = await createContext(null);
    context.log.debug('ApiCall', 'authenticationCall');
    await method(context);
  } catch (error) {
    logger.error('ApiCall', error, 'authentication error');
    done(error);
  }
}

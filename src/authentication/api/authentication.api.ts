import { IContext } from '../../tools/context';

export class AuthenticationApi {
  constructor(context: IContext) {}

  public async getSignInRedirectUrl(): Promise<string> {
    const homepage = 'homepage';
    return Promise.resolve(homepage);
  }
}

export function authenticationApi(context: IContext): AuthenticationApi {
  return new AuthenticationApi(context);
}

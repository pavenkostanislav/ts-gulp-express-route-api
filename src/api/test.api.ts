import { IContext } from '../tools/context';

export class TestApi {
  constructor(private context: IContext) { }

  public async getData(a: string, b: number): Promise<any> {
    if (this.context.user) {
      /// ...
    }
    const sum = a + b;
    return Promise.resolve(sum);
  }
}

export function testApi(context: IContext): TestApi {
  return new TestApi(context);
}

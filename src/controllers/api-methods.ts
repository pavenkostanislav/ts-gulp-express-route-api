
import { testApi } from '../api/test.api';
import { apiCall } from '../tools/apiCall';
import { IContext } from '../tools/context';
import { Router, Request } from 'express';

export function apiMethods(router: Router): void {
  function getTest(context: IContext, req: Request): Promise<any> {
    return testApi(context).getData(req.query.a, +req.query.b);
  }
  router.get('/test', apiCall(getTest));
}

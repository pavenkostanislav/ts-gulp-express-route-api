
import * as _ from 'lodash';
import { config } from '../../../services/config';
import { LogLevel, LoggerOptions } from 'bunyan';
const bunyanDebugStream = require('bunyan-debug-stream');

export function createBunyanConfig(): LoggerOptions {
  const level: LogLevel = config.log.level;
  const hiddenFieldsConfig = config.log.hideFields || '';
  const hiddenFields = _(hiddenFieldsConfig.split(','))
    .keyBy(field => field)
    .mapValues(field => null)
    .value();

  return {
    name: 'express-route-api',
    level: level,
    streams: [{
      level: level,
      type: 'raw',
      stream: bunyanDebugStream({
        forceColor: true,
        stringifiers: {
          ...hiddenFields
        },
        prefixers: {
          source: (source: string) => source
        }
      })
    }],
    serializers: bunyanDebugStream.serializers
  };
}

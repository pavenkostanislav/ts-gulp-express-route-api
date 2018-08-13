export const config: any = {
    app: {
      name: '<app name>',
      port: 3000,
      host: '0.0.0.0'
    },
    session: {
      name: 'user',
      secret: 'session secret passcode',
      cookie: {
        maxAge: 1800000
      }
    },
    auth: {
      loginPage: 'http://localhost:4200',
      clientHost: 'http://localhost:4200',
      backDoor: true
    },
    log: {
      logger: 'bunyan',
      level: 'DEBUG',
      hideFields: 'schema,details'
    }
  };

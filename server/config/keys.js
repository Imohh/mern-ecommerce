module.exports = {
  app: {
    name: 'Mern Ecommerce',
    apiURL: 'api',
    serverURL: 'https://mern-ecommerce-05ka.vercel.app',
    clientURL: 'http://localhost:8080'
  },
  port: 3000,
  database: {
    url: 'mongodb+srv://imoh88:iamnotorious@cluster0.tjyapzm.mongodb.net/shop?retryWrites=true&w=majority'
  },
  jwt: {
    secret: 'ghp_ydtlBNGF23U9dIgYYrB3XaHt30a3Pm0sgbr',
    tokenLife: '7d'
  },
  mailchimp: {
    key: '03559e35ac6cea95b4bc5ae91c09db28-us14',
    listKey: '33fb14d351'
  },
  mailgun: {
    key: '66847913af8a4380caa37cf3a9911835',
    domain: 'sandboxcc0ed5e9c70f4dccbd6e47cf34b04fdb.mailgun.org',
    sender: 'imoh@gmail.com'
  },
  google: {
    clientID: '582988085781-b3m4qcahs7cii3v6qoabvqu08na3qcsg.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'auth/google/callback'
  },
  facebook: {
    clientID: '730416318564285',
    clientSecret: '75ae41114167dc8a7a0ba074ba3ca97a',
    callbackURL: 'auth/facebook/callback'
  },
  aws: {
    accessKeyId: 'AKIAWRNYVI2FSPPTIHS5',
    secretAccessKey: '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',
    region: 'elasticache.af-south-1.amazonaws.com',
    bucketName: 'eminence88'
  },
};

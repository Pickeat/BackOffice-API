const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  app: process.env.APP,
  env: process.env.NODE_ENV,
  secret: process.env.APP_SECRET,
  hostname: process.env.HOSTNAME,
  frontUrl: process.env.FRONTURL,
  mongoPickeat: process.env.MONGOURI_PICKEAT,
  mongo: {
    uri: process.env.MONGOURI_BACKOFFICE,
    testURI: process.env.MONGOURI_BACKOFFICE
  },
}

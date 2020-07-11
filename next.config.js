// require('dotenv').config();
console.log('NODE_ENV', process.env.NODE_ENV)
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  env: {
    PRISMIC_API_END_POINT: process.env.PRISMIC_API_END_POINT,
    PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN,
  },
}

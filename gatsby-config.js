/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}

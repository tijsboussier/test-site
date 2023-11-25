/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: "Early rework of tijsboussier.eu",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    { 
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      }
    },
  ],
};

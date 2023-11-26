/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: "Early rework of tijsboussier.eu",
  },
  plugins: [
    { 
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      }
    },
  ],
};

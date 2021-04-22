require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "AI Spy: Ask a computer to share what is in an object.",
    siteUrl: "https://ai-spy.netlify.app",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_PLUGIN_GOOGLE_ANALYTICS, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAuJIv0b65ovr6nwEwSy-QHi7tdXAof3UY",
          authDomain: "image-id-2020.firebaseapp.com",
          databaseURL: "https://image-id-2020.firebaseio.com",
          projectId: "image-id-2020",
          storageBucket: "image-id-2020.appspot.com",
          messagingSenderId: "311144109271",
          appId: "1:311144109271:web:f7e27dcd08705e79de8c92",
          measurementId: "G-024RSV1EZS"
        }
      }
    },
  ],
}

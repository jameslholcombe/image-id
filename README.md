<h1 align="center">
  Image ID
</h1>

Get image recognition software and Google's Tensorflow set up on your own computer!

## 🚀 Quick start

1.  **Install Gatsby CLI**

    Be sure to verify that Node and Git are installed on your computer first.
    Helpful instructions can be found <a href="https://www.gatsbyjs.com/tutorial/part-zero">here</a>.

    ```shell
    npm install -g gatsby-cli
    ```

    `yarn` package manager is also required to install dependencies.

    ```shell
    npm install -g yarn
    ```

2.  **Clone the repository and install packages**

    ```shell
    git clone https://github.com/jameslholcombe/image-id
    cd image-id
    yarn install
    ```

3.  **Run the website!**

    ```shell
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`!

4. **Run tests**

    This project uses Jest as a test runner. It will be installed along with the rest of the packages when you run `yarn install`.

   ```shell
   npm run test
   ```

   (Comment out the `console.log` in `src/helpers/parseTensorflowResponse.js` before running)

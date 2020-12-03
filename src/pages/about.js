import React from 'react';
import ContentContainer from '../components/ContentContainer';

export default function About() {
  return (
    <>
      <ContentContainer>
        <div className="about-text-wrapper">
          <h1>About</h1>
          <p>
            This website was created by <a href="https://www.jameslholcombe.com">James Holcombe</a>, a full-stack software engineer based in the Washington, D.C. area.
            He's interested by the practical applications of Artificial Intelligence/Machine Learning and built the site using Google's <a href="https://www.tensorflow.org/">Tensorflow</a> engine with the intention of making image recognition technology more accessible.
          </p>
          <p>
            There are two models used to make predictions: <a href="https://github.com/tensorflow/tfjs-models/tree/master/mobilenet">MobileNet</a> and <a href="https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd">Coco SSD</a>.
            MobileNet identifies single objects with a high degree of specificity.
            Coco SSD identifies multiple objects of different types in an image.
          </p>
          <p>
            The actual site is built using <a href="https://www.gatsbyjs.com/">Gatsby</a>, a Javascript framework that uses React and Node.
            It is compiled into a static site during the build process which contributes to the speedy load time.
            The site is hosted on <a href="https://www.netlify.com/">Netlify</a>.
          </p>
          <p>
            James hopes that by providing this as a free service he will make Artificial Intelligence more accessible to everyone!
            Check out the code and instructions for running the website locally <a href="https://github.com/jameslholcombe/image-id">here</a>.
            If you are enjoying the site, please consider donating to his <a href="https://www.patreon.com/jameslholcombe">Patreon</a>.
          </p>
        </div>
      </ContentContainer>
    </>
  );
}

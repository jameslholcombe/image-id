import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <>
    <Helmet
      title='ID Image'
      meta={[
        {
          name: 'description',
          content: 'Identify an image using Google AI and Machine Learning software TensorFlow.'
        },
        {
          property: 'og:title',
          content: 'ID Image'
        },
        {
          property: 'og:description',
          content: 'Identify an image using Google AI and Machine Learning software TensorFlow.'
        }
      ]}
    >
    </Helmet>
    </>
  );
};

export default SEO;

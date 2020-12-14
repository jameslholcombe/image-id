import React from 'react';

const Info = () => {
  return (
    <div className="info">
      <h1>Image ID</h1>
      <h3>Use Artificial Intelligence to identify images</h3>
      <div><strong>How it works:</strong></div>
      <ol>
        <li>Upload any image</li>
        <li>
          Google's AI & Machine Learning engine, Tensorflow, will attempt to identify objects in the image.
        </li>
        <li>
          Predictions are displayed below!
        </li>
      </ol>
    </div>
  );
};

export default Info;

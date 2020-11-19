import React from 'react';

const Predictions = ({ predictions }) => {
  const predictionComponents = predictions.map((prediction) => (
    <div key={prediction.class}>{prediction.count} {prediction.class}</div>
  ));

  return (
  <div className="prediction">
    {predictionComponents}
  </div>
  );
};

export default Predictions;

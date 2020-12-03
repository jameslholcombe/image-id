import React from 'react';

const Predictions = ({ predictions }) => {
  const predictionComponents = predictions.map((prediction) => (
    <div key={prediction.class} className="prediction">{prediction.count} {prediction.class}</div>
  ));

  return (
    <>
      <div className="prediction-header"><strong>Predictions:</strong></div>
      <div>
        {predictionComponents}
      </div>
    </>
  );
};

export default Predictions;

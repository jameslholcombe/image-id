const parseTensorFlowResponse = (
  mobileNetPredictions,
  cocoSsdPredictions
) => {
  const filteredMobileNetPredictions = mobileNetPredictions.filter((prediction) => {
    return prediction.probability > 0.3;
  });

  const filteredCocoSsdPredictions = cocoSsdPredictions.filter((prediction) => {
    return prediction.score > 0.3;
  });

  console.log(filteredCocoSsdPredictions);
};

export default parseTensorFlowResponse;

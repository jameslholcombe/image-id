const parseTensorFlowResponse = (
  mobileNetPredictions,
  cocoSsdPredictions
) => {
  const filteredMobileNetPredictions = mobileNetPredictions.filter(prediction => {
    return prediction.probability > 0.3;
  }).map(prediction => {
    return {
      class: prediction.className,
      score: prediction.probability,
    };
  });

  const filteredCocoSsdPredictions = cocoSsdPredictions
    .filter((prediction) => prediction.score > 0.3)
    .map(({bbox, ...remainingAttrs}) => remainingAttrs);

  const combinedPredictions = [...filteredMobileNetPredictions, ...filteredCocoSsdPredictions];

  combinedPredictions.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));

  return combinedPredictions;
};

export default parseTensorFlowResponse;

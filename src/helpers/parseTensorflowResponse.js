const parseTensorFlowResponse = (
  mobileNetPredictions,
  cocoSsdPredictions
) => {

  // Filter on score and change key names
  const filteredMobileNetPredictions = mobileNetPredictions.filter(prediction => {
    return prediction.probability > 0.3;
  }).map(prediction => {
    return {
      class: prediction.className,
      score: prediction.probability,
    };
  });

  // Filter on score and remove unneeded key/value
  const filteredCocoSsdPredictions = cocoSsdPredictions
    .filter((prediction) => prediction.score > 0.3)
    .map(({bbox, ...remainingAttrs}) => remainingAttrs);

  // Combine prediction arrays
  const combinedPredictions = [...filteredMobileNetPredictions, ...filteredCocoSsdPredictions];

  // Array that will contain end result
  const aggregatedPredictions = [];

  // Array that is used for lookups for duplicate values
  const distinctClass = [];

  // Combine objects with same value for the key 'class'
  combinedPredictions.map((prediction) => {
    if (distinctClass.includes(prediction.class) === false) {
      distinctClass.push(prediction.class);
      aggregatedPredictions.push({
        count: 1,
        class: prediction.class,
        score: prediction.score,
      });
    } else {
      const existingAggregatedPrediction = aggregatedPredictions.filter(p => p.class === prediction.class)[0];
      existingAggregatedPrediction.count = existingAggregatedPrediction.count + 1;
      existingAggregatedPrediction.score = prediction.score + existingAggregatedPrediction.score;
    }
    return aggregatedPredictions;
  });

  // Average prediction.score for aggregated objects
  aggregatedPredictions.map((prediction) => {
    if (prediction.score > 1) {
      return prediction.score = prediction.score / prediction.count;
    } else {
      return prediction.score;
    }
  });

  // Sort prediction.score decreasing
  aggregatedPredictions.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));

  return aggregatedPredictions;
};

export default parseTensorFlowResponse;

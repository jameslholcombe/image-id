import parseTensorFlowResponse from '../helpers/parseTensorFlowResponse';

describe('test tensorflow response parsing', () => {
  it('both have response', () => {
    const mobileNetPredictions = [
      {
        className: 'espresso',
        probability: 0.7745
      },
      {
        className: 'coffee mug',
        probability: 0.06242
      },
      {
        className: 'cup',
        probability: 0.0603
      }
    ];

    const cocoSsdPredictions = [
      {
        bbox: [
          66.4341151714325,
          23.803917855024338,
          109.83829200267792,
          84.52852180600166
        ],
        class: 'cup',
        score: 0.9749
      }
    ];

    const parsedResult = parseTensorFlowResponse(
      mobileNetPredictions,
      cocoSsdPredictions
    );

  });
});

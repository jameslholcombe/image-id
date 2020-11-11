import parseTensorFlowResponse from '../helpers/parseTensorFlowResponse';

describe('test tensorflow response parsing', () => {
  it('both have response no same items', () => {
    const mobileNetPredictions = [
      {
        count: 1,
        className: 'espresso',
        probability: 0.7745
      },
      {
        count: 1,
        className: 'coffee mug',
        probability: 0.06242
      },
      {
        count: 1,
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

    expect(parsedResult).toEqual([
      {
        count: 1,
        class: 'cup',
        score: 0.9749
      },
      {
        count: 1,
        class: 'espresso',
        score: 0.7745
      }
    ]);
  });

  it('returns no valid prediction', () => {
    const mobileNetPredictions = [
      {
        className: 'lakeside, lakeshore',
        probability: 0.2039
      },
      {
        className: 'barn',
        probability: 0.05776
      },
      {
        className: 'obelisk',
        probability: 0.0550
      }
    ];

    const cocoSsdPredictions = [];

    const parsedResult = parseTensorFlowResponse(
      mobileNetPredictions,
      cocoSsdPredictions
    );

    expect(parsedResult).toEqual([]);
  });

  it('returns multiple CocoSsd predictions with same keys', () => {
    const mobileNetPredictions = [
      {
        className: 'lab coat, laboratory coat',
        probability: 0.2630
      },
      {
        className: 'desk',
        probability: 0.1182
      },
      {
        className: 'pajama, pyjama, pjs, jammies',
        probability: 0.11657
      }
    ];

    const cocoSsdPredictions = [
      {
        bbox: [
          63.78,
          84.936,
          46.6442206799984,
          99.47016835212708
        ],
        class: 'person',
        score: 0.9526306390762329
      },
      {
        bbox: [
          89.8530021905899,
          119.19286847114563,
          68.42611277103424,
          64.19280171394348
        ],
        class: 'person',
        score: 0.7627212405204773
      },
      {
        bbox: [
          29.42897568643093,
          111.69569194316864,
          49.11157913506031,
          80.37081360816956
        ],
        class: 'person',
        score: 0.6902161240577698
      }
    ];

    const parsedResult = parseTensorFlowResponse(
      mobileNetPredictions,
      cocoSsdPredictions
    );

    expect(parsedResult).toEqual([
      {
        count: 3,
        class: 'people',
        score: 0.80185600121816,
      }
    ]);
  });

  it('both have duplicate keys and additional classes included', () => {
    const mobileNetPredictions = [
      {
        className: 'box',
        probability: 0.9,
      },
      {
        className: 'box',
        probability: 0.7,
      },
      {
        className: 'person',
        probability: 0.6,
      },
      {
        className: 'lab coat, laboratory coat',
        probability: 0.2630
      },
      {
        className: 'desk',
        probability: 0.1182
      },
      {
        className: 'pajama, pyjama, pjs, jammies',
        probability: 0.11657
      }
    ];

    const cocoSsdPredictions = [
      {
        bbox: [
          63.78,
          84.936,
          46.6442206799984,
          99.47016835212708
        ],
        class: 'person',
        score: 0.9526306390762329
      },
      {
        bbox: [
          89.8530021905899,
          119.19286847114563,
          68.42611277103424,
          64.19280171394348
        ],
        class: 'person',
        score: 0.7627212405204773
      },
      {
        bbox: [
          29.42897568643093,
          111.69569194316864,
          49.11157913506031,
          80.37081360816956
        ],
        class: 'person',
        score: 0.6902161240577698
      }
    ];

    const parsedResult = parseTensorFlowResponse(
      mobileNetPredictions,
      cocoSsdPredictions
    );

    expect(parsedResult).toEqual([
      {
        count: 2,
        class: 'boxes',
        score: 0.8
      },
      {
        count: 4,
        class: 'people',
        score: 0.75139200091362
      }
    ]);
  });
});

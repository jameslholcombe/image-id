import parseTensorflowResponse from '../helpers/parseTensorflowResponse';

describe('test tensorflow response parsing', () => {
  it('equals four', () => {
    const four = parseTensorflowResponse();
    expect(four).toBe(4);
  });
});

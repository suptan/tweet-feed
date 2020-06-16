import { objectToQueryString } from '@common/utils/url-helper';

describe('utils/url-helper', () => {
  it('should covert given object to ', () => {
    const mockInput = {
      foo: 'bar',
      delta: 'beta',
      yes: '!@#$&',
    };
    const result = objectToQueryString(mockInput);
    expect(result).toBe('foo=bar&delta=beta&yes=!%40%23%24%26');
  })

  it('should return empty string', () => {
    const result = objectToQueryString();
    expect(result).toBe('');
  });

})

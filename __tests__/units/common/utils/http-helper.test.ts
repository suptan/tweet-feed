import http from '@common/utils/http-helper';
import axios from 'axios';

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    WEB_API_DOMAIN: 'api/',
    PROXY_URL: 'proxies/'
  }
}));
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('utils/http-helper', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('should call GET request to given url', async () => {
    const mockData = {
      foo: 'bat',
      bar: 'fuuuu',
    };
    const mockInput = {
      path: 'sample',
      queryString: 'kqq=r',
    }
    mockAxios.get.mockResolvedValueOnce({ data: mockData });
    const result = await http.getRequest(mockInput);
    expect(result).toBe(mockData);
    expect(mockAxios.get).toBeCalledWith('sample?kqq=r');
  });

  it('should retry GET request with proxy and failed', async () => {
    const mockInput = {
      path: '',
      queryString: '',
    }
    mockAxios.get.mockRejectedValue(new Error('message'));
    try {
      await http.getRequest(mockInput);
    } catch (error) {
      expect(error).toEqual(expect.any(Error));
      expect(mockAxios.get).toBeCalledWith(
        expect.any(String),
        {
          baseURL: 'proxies/api/'
        }
      );
    }
  });

  // TODO, research for mock solution
  it.skip('should retry GET request with proxy and success', async () => {
    mockAxios.get.mockRejectedValue(new Error('message'));
    mockAxios.get.mockResolvedValueOnce({ data: {} });

    const result = await http.getRequest({});

    expect(result).toEqual({})
  })
})

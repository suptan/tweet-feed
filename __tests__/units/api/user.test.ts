import http from '@common/utils/http-helper';
import api from '@api';
import { APITweet } from "types";

jest.mock('@common/utils/http-helper', () => ({
  getRequest: jest.fn(),
}));
jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    FETCH_LIMIT: 2
  }
}));

describe('API User', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('should call GET request to API and retrieve data', async () => {
    const mockData: APITweet = {
      count: 1,
      offset: 0,
      results: [
        {
          account: {
            fullname: 'SciML',
            href: '/SciML_Org',
            id: 32325,
          },
          date: '2020-06-15T14:09:00+07:00',
          hashtags: [
            '#foo',
            '#bar',
          ],
          likes: 11,
          replies: 0,
          retweets: 2,
          text: 'Have you written teaching materials, a book, a blog post, or news articles',
        },
        {
          account: {
            fullname: 'agarwal',
            href: '/kunalagarwal25',
            id: 18432,
          },
          date: '2020-06-15T02:09:00+07:00',
          hashtags: [
            '#Python',
            '#earthanalytics',
          ],
          likes: 2,
          replies: 1,
          retweets: 2,
          text: "Look, I'm tweeting from #Python in my #earthanalytics class! @EarthLabCU",
        }
      ]
    }
    const mockParams = {
      q: 'earth',
      offset: 30,
    };
    http.getRequest.mockResolvedValueOnce(mockData);
    const result = await api.getFeedByUser(mockParams);
    expect(result).toEqual(mockData);
    expect(http.getRequest).toBeCalledWith(
      expect.objectContaining({
        path: 'users/earth',
        queryString: 'offset=30&limit=2',
      })
    );
  });

  it('should throw error when request failed', async () => {
    const mockData = new Error('request failed');
    http.getRequest.mockRejectedValueOnce(mockData);
    try {
      await api.getFeedByUser({});
    } catch(err) {
      expect(err).toEqual(mockData);
      expect(http.getRequest).toBeCalledWith(
        expect.objectContaining({
          path: 'users/raymondh',
          queryString: 'offset=0&limit=2',
        })
      );
    }
  });

})

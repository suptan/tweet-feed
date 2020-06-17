import api from '@api';
import HashTagPage from '../../pages/hash-tag';
import { render, screen, fireEvent, waitFor, act } from '../utils';

const mockRouterPush = jest.fn();

jest.mock('@api', () => ({
  getFeedByHashTag: jest.fn(() => Promise.resolve({
    count: 10,
    offset: 0,
    results: [
      {
        account: {
          fullname: 'name',
          href: '/path/ref',
          id: 432,
        },
        date: '2020-06-14T09:01:00+07:00',
        hashtags: [ 'coding', 'js'],
        likes: 0,
        replies: 0,
        retweets: 0,
        text: 'for test',
      },
    ],
  })),
}))
jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    NODE_ENV: 'test',
    FETCH_LIMIT: 10,
  },
}));
jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: 'mock-path',
      push: mockRouterPush,
    };
  },
}));

describe('<HashTag />', () => {
  it('should render page with default props', async () => {
    await act(async () => {
      render(
        <HashTagPage />, {}
      )
    })
    const title = await screen.findByTestId('page-title');
    expect(title).toHaveTextContent('Hash Tag');

    const input = await screen.findByPlaceholderText('Search by Hashtag');
    expect(input.textContent).toBe('');

    const record = await screen.findByText('for test');
    expect(record.textContent).toBe('for test');
    expect(api.getFeedByHashTag).toBeCalledTimes(1);
    expect(api.getFeedByHashTag).toBeCalledWith({});
  });

  it('should change url when search input changed', async () => {
    const input = screen.getByPlaceholderText('Search by Hashtag');
    fireEvent.change(input, { target: { value: 'css' } });
    // tslint:disable-next-line
    expect(input.value).toBe('css');
    fireEvent.click(screen.getByLabelText('search'));
    expect(mockRouterPush).toBeCalledWith('mock-path?q=css');
    await waitFor(() => screen.getByPlaceholderText('Search by Hashtag'));
  });

  it('should change url when page changed', () => {
    // if not found, please check max page calculation logic
    // related with count & FETCH_LIMIT
    fireEvent.click(screen.getByTitle('2'));
    expect(mockRouterPush).toBeCalledWith('mock-path?q=css');
  });
})

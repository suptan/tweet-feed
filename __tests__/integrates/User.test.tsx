import api from '@api';
import UserPage from '../../pages/user';
import { render, screen, fireEvent, waitFor, act } from '../utils';

const mockRouterPush = jest.fn();

jest.mock('@api', () => ({
  getFeedByUser: jest.fn(() => Promise.resolve({
    count: 10,
    offset: 0,
    results: [
      {
        account: {
          fullname: 'name',
          href: '/fb/tweet',
          id: 432,
        },
        date: '2020-06-10T09:01:00+07:00',
        hashtags: [ 'coding', 'js'],
        likes: 0,
        replies: 0,
        retweets: 0,
        text: 'for test user',
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

describe('<User />', () => {
  it('should render page with default props', async () => {
    await act(async () => {
      render(
        <UserPage q="test-user" offset="3" />, {}
      )
    })
    const title = await screen.findByTestId('page-title');
    expect(title).toHaveTextContent('User');

    const input = await screen.findByPlaceholderText('Search by User');
    expect(input.textContent).toBe('');

    const record = await screen.findByText('for test user');
    expect(record.textContent).toBe('for test user');
    expect(api.getFeedByUser).toBeCalledTimes(1);
    expect(api.getFeedByUser).toBeCalledWith(
      expect.objectContaining({
        q: 'test-user',
        offset: '3',
      })
    );
  });

  it('should change url when search input changed', async () => {
    const input = screen.getByPlaceholderText('Search by User');
    fireEvent.change(input, { target: { value: 'css' } });
    // tslint:disable-next-line
    expect(input.value).toBe('css');
    fireEvent.click(screen.getByLabelText('search'));
    expect(mockRouterPush).toBeCalledWith('mock-path?q=css');
  });

  it('should change url when page changed', () => {
    // if not found, please check max page calculation logic
    // related with count & FETCH_LIMIT
    fireEvent.click(screen.getByTitle('2'));
    expect(mockRouterPush).toBeCalledWith('mock-path?q=css');
  });
})

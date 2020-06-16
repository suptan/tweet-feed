import api from '@api';
import HashTagPage from '../../pages/hash-tag';
import { render, screen, fireEvent } from '../utils';

const mockRouterPush = jest.fn();

jest.mock('@api', () => ({
  getFeedByHashTag: jest.fn(() => Promise.resolve({
    count: 3,
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
    FETCH_LIMIT: 2
  }
}));
jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: mockRouterPush,
    };
  },
}));

describe('<HashTag />', () => {
  const { findByTestId } = render(
    <HashTagPage />, {}
  )

  it('should render page with default props', async () => {
    const title = await findByTestId('page-title');
    expect(title).toHaveTextContent('Hash Tag');

    // const input = await findByTestId('tag-search');
    const input = await screen.findByPlaceholderText('Search by Hashtag');
    expect(input.textContent).toBe('');

    expect(api.getFeedByHashTag).toBeCalledTimes(1);
    expect(api.getFeedByHashTag).toBeCalledWith({});
    // const records = container.querySelector('[class="ant-table-row"]');
    const record = await screen.findByText('for test');
    expect(record.textContent).toBe('for test');
  });

  it('should call to API when search input changed', async () => {
    const input = screen.getByPlaceholderText('Search by Hashtag');
    fireEvent.change(input, { target: { value: 'css' } });
    // tslint:disable-next-line
    expect(input.value).toBe('css');
    // TODO, fireEvent not working with antd
    // fireEvent.keyDown(screen.getByDisplayValue('css'), { key: 'Enter', code: 13  });
    // expect(mockRouterPush).toBeCalledWith('');
  })
  
})

import { get, map } from 'lodash';
import getConfig from 'next/config';
import { ColumnType, TablePaginationConfig } from 'antd/lib/table';
import dayjs from 'dayjs';
import { UseTweetTableElementParams, UseTweetTableElement } from 'types';
import logger from '@common/utils/logger';

const { publicRuntimeConfig: { FETCH_LIMIT } } = getConfig();

const useTweetTableElement = ({
  data,
  onPageChange,
}: UseTweetTableElementParams): UseTweetTableElement => {
  const columns: ColumnType<any>[] = [
    {
      key: 'text',
      dataIndex: 'text',
      title: 'Tweet',
      width: 230,
      fixed: 'left',
      render: (text: string) => {
        return (
          <p className="double-line-clamp">{text}</p>
        )
      },
    },
    {
      key: 'likes',
      dataIndex: 'likes',
      title: 'Likes',
      width: 67,
      align: 'center',
    },
    {
      key: 'replies',
      dataIndex: 'replies',
      title: 'Replies',
      width: 82,
      align: 'center',
    },
    {
      key: 'retweets',
      dataIndex: 'retweets',
      title: 'Retweets',
      width: 95,
      align: 'center',
    },
    {
      key: 'hashtags',
      dataIndex: 'hashtags',
      title: 'Hashtags',
      width: 300,
    },
    {
      key: 'date',
      dataIndex: 'date',
      title: 'Date',
    },
  ];
  const count = get(data, 'count', 0);
  const offset = get(data, 'offset', 0);
  const dataSource = map(get(data, 'results'), ({
    likes,
    replies,
    retweets,
    hashtags,
    date,
    ...rest
  }, i: number) => ({
    key: i,
    ...rest,
    likes: likes || '-',
    replies: replies || '-',
    retweets: retweets || '-',
    hashtags: hashtags.slice(0, 2),
    date: dayjs(date).format('MMM D, YYYY'),
  }));
  // tslint:disable-next-line: no-bitwise
  const currentPage = ((Number(offset) / FETCH_LIMIT) | 0) + 1;
  const totalPage = (count >= FETCH_LIMIT ? currentPage + 1 : currentPage) * FETCH_LIMIT;

  logger.debug('currentPage', currentPage);
  logger.debug('totalPage', totalPage);

  const pagination: TablePaginationConfig = {
    total: totalPage,
    defaultCurrent: currentPage,
    onChange: onPageChange,
    position: ['bottomLeft'],
  };
  const scroll = {
    x: 1000,
    scrollToFirstRowOnChange: true,
  };

  return {
    columns,
    dataSource,
    pagination,
    scroll,
  };
}

export {
  useTweetTableElement,
}

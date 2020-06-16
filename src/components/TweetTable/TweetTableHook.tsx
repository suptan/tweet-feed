import { map } from 'lodash';
import { ColumnType, TablePaginationConfig } from 'antd/lib/table';
import { UseTweetTableElementParams, UseTweetTableElement } from 'types';

const useTweetTableElement = ({
  data,
  totalPage,
  currentPage,
  onPageChange,
}: UseTweetTableElementParams): UseTweetTableElement => {
  const columns: ColumnType<any>[] = [
    {
      key: 'text',
      dataIndex: 'text',
      title: 'Tweet',
      width: 220,
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
      // colSpan: 2,
      align: 'center',
    },
    {
      key: 'replies',
      dataIndex: 'replies',
      title: 'Replies',
      // colSpan: 2,
      width: 80,
      align: 'center',
    },
    {
      key: 'retweets',
      dataIndex: 'retweets',
      title: 'Retweets',
      // colSpan: 2,
      width: 93,
      align: 'center',
    },
    {
      key: 'hashtags',
      dataIndex: 'hashtags',
      title: 'Hashtags',
      // colSpan: 2,
    },
    {
      key: 'date',
      dataIndex: 'date',
      title: 'Date',
      // colSpan: 2,
    },
  ];
  const dataSource = map(data, (d, i: number) => ({ key: i, ...d }))
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

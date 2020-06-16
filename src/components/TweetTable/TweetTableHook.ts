import { startCase, map } from 'lodash';
import { ColumnType, TablePaginationConfig } from 'antd/lib/table';
import { UseTweetTableElementParams, UseTweetTableElement } from 'types';

const useTweetTableElement = ({
  data,
  totalPage,
  currentPage,
}: UseTweetTableElementParams): UseTweetTableElement => {
  const keys: string[] = [
    'likes', 'replies', 'retweets', 'hashtags', 'date'
  ];
  const textCol: ColumnType<any> = {
    key: 'text',
    dataIndex: 'text',
    title: 'Tweet',
    ellipsis: true,
  }
  const columns: ColumnType<any>[] = keys.map((key: string) => ({
    key,
    dataIndex: key,
    title: startCase(key),
  }));
  columns.unshift(textCol);
  const dataSource = map(data, (d, i: number) => ({ key: i, ...d }))
//   console.log(dataSource, data)
  const pagination: TablePaginationConfig = {
    total: totalPage,
    defaultCurrent: currentPage,
  }

  return {
    columns,
    dataSource,
    pagination,
  };
}

export {
  useTweetTableElement,
}

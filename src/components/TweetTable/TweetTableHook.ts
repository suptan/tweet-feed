import { startCase, map } from 'lodash';
import { ColumnType } from 'antd/lib/table';
import { UseTweetTableElementParams, UseTweetTableElement } from 'types';

const useTweetTableElement = ({
  data
}: UseTweetTableElementParams): UseTweetTableElement => {
  const keys: string[] = [
    'text', 'likes', 'replies', 'retweets', 'hashtags', 'date'
  ];
  const columns: ColumnType<any>[] = keys.map((key: string) => ({
    key,
    dataIndex: key,
    title: startCase(key),
    ellipsis: key === 'text',
  }));
  const dataSource = map(data, (d, i: number) => ({ key: i, ...d,}))
//   console.log(dataSource, data)

  return {
    columns,
    dataSource,
  };
}

export {
  useTweetTableElement,
}

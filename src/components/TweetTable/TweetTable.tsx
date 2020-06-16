import Table from 'antd/lib/table';
import { useTweetTableElement } from './TweetTableHook';

type TweetTableProps = {
  data: any[] | undefined;
  totalPage: number;
  currentPage: number;
}

const TweetTable = (props: TweetTableProps) => {
  // const { data, count, currentPage } = props;
  const { columns, dataSource, pagination } = useTweetTableElement(props);
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={pagination}
    />
  )
}

export default TweetTable;

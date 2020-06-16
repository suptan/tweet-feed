import Table from 'antd/lib/table';
import { useTweetTableElement } from './TweetTableHook';

type TweetTableProps = {
  data: any[] | undefined;
  totalPage: number;
  currentPage: number;
  loading: boolean;
  onPageChange: (page: number, pageSize?: number | undefined) => void
}

const TweetTable = (props: TweetTableProps) => {
  const { loading } = props;
  const { columns, dataSource, pagination } = useTweetTableElement(props);
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={pagination}
      loading={loading}
    />
  )
}

export default TweetTable;

import Table from 'antd/lib/table';
import { useTweetTableElement } from './TweetTableHook';
import { APITweet } from 'types';

type TweetTableProps = {
  data: APITweet | undefined;
  loading: boolean;
  onPageChange: (page: number, pageSize?: number | undefined) => void
}

const TweetTable = (props: TweetTableProps) => {
  const { loading } = props;
  const { columns, dataSource, pagination, scroll } = useTweetTableElement(props);
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={pagination}
      loading={loading}
      scroll={scroll}
    />
  )
}

export default TweetTable;

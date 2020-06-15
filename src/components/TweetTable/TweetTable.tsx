import Table from 'antd/lib/table';
import { useTweetTableElement } from './TweetTableHook';

type TweetTableProps = {
  data: any[] | undefined;
}

const TweetTable = (props: TweetTableProps) => {
  const { data } = props;
  const { columns, dataSource } = useTweetTableElement({ data });
  return (
    <Table columns={columns} dataSource={dataSource} />
  )
}

export default TweetTable;

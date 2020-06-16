import React from 'react'
import Search from 'antd/lib/input/Search';
import Table from 'antd/lib/table';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { useTweetTableElement } from './TweetTableHook';
import { APITweet, TweetTableSearchConfig } from 'types';
import logger from '@common/utils/logger';

import './TweetTable.scss';

type TweetTableProps = {
  data: APITweet | undefined;
  loading: boolean;
  search: TweetTableSearchConfig;
  onPageChange: (page: number, pageSize?: number | undefined) => void;
}

const TweetTable = (props: TweetTableProps) => {
  const {
    loading, search,
  } = props;
  const { columns, dataSource, pagination, scroll } = useTweetTableElement(props);
  return (
    <React.Profiler id="TweetTable" onRender={logger.handleProfileRender}>
      {search &&
      (
        <Row className="TweetTable__Search">
          <Col span={24} className="TweetTable__SearchLabel">
            <label>{search.label}</label>
          </Col>
          <Col sm={12} md={8}>
            <Search
              placeholder={search.placeholder}
              onSearch={search.onSearch}
              defaultValue={search.q}
            />
          </Col>
        </Row>
      )}
      <Row className="TweetTable__Feed">
        <Col flex="flex" span={24}>
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={pagination}
            loading={loading}
            scroll={scroll}
          />
        </Col>
      </Row>
    </React.Profiler>
  )
}

export default TweetTable;

import React, { useMemo } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Search from 'antd/lib/input/Search';
import logger from '@common/utils/logger';
import TweetTable from '@components/TweetTable';
import { useHashTagElement } from './HashHook';
import { DefaultLayout } from '@components/Layout';
import { UrlProps } from 'types';

import './HashTag.scss';

interface HashTagProps {
  q?: string;
  offset?: string;
}

interface HashTagInitialProps {
  query: UrlProps
}

const HashTag = (props: HashTagProps) => {
  const {
    q,
    tweet,
    loading,
    handleOnSearch,
    handleOnPageChange,
  } = useHashTagElement(props);

  return useMemo(() =>
    (
      <React.Profiler id="HashTag" onRender={logger.handleProfileRender}>
        <DefaultLayout
          pageTitle="Hash Tag"
          title="Hash Tag"
          desc="Tweeter feed by hash tag"
          selectedMenu={['hash-tag']}
        >
          <Row className="HashTag__Search">
            <Col span={24}>
              <label>Hashtag search</label>
            </Col>
            <Col sm={12} md={8}>
              <Search
                placeholder="Search by Hashtag"
                onSearch={handleOnSearch}
                defaultValue={q}
              />
            </Col>
          </Row>
          <Row className="HashTag__Feed">
            <Col flex="flex" span={24}>
              <TweetTable
                data={tweet}
                loading={loading}
                onPageChange={handleOnPageChange}
              />
            </Col>
          </Row>
        </DefaultLayout>
      </React.Profiler>
    ),
    [q, tweet, loading]
  )
}

HashTag.getInitialProps = ({ query }: HashTagInitialProps) => {
  logger.debug('offset', query);
  const { q, offset } = query;
  return {
    q,
    offset,
  }
}

export default HashTag;

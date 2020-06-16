import React, { useMemo } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import logger from '@common/utils/logger';
import { useHashTagElement } from './HashHook';
import { DefaultLayout } from '@components/Layout';
import TweetTable from '@components/TweetTable';
import { UrlProps } from 'types';

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
    search,
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
          <Row>
            <Col flex="auto">
              <TweetTable
                data={tweet}
                loading={loading}
                search={search}
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

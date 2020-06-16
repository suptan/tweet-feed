import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Search from 'antd/lib/input/Search';
import logger from '@common/utils/logger';
import TweetTable from '@components/TweetTable';
import { useHashTagElement } from './HashHook';
import { DefaultLayout } from '@components/Layout';

import './HashTag.scss';

interface UrlProps {
  q?: string;
  offset?: string;
}

interface HashTagInitialProps {
  query: UrlProps
}

const HashTag = (props: UrlProps) => {
  const {
    q,
    hashTagResults,
    totalPage,
    currentPage,
    loading,
    handleOnSearch,
    handleOnPageChange,
  } = useHashTagElement(props);

  return (
    <DefaultLayout
      pageTitle="Hash Tag"
      title="Hash Tag"
      desc="Tweet feed by hash tag"
      selectedMenu={['hashtag']}
    >
      <Row className="HashTag__Search">
        <Col span={24}>
          <label>Hashtag search</label>
        </Col>
        <Col sm={12} md={8}>
          <Search
            placeholder="Search by Hashtag"
            onSearch={handleOnSearch}
            value={q}
          />
        </Col>
      </Row>
      <Row className="HashTag__Feed">
        <Col flex="flex" span={24}>
          <TweetTable
            data={hashTagResults}
            totalPage={totalPage}
            currentPage={currentPage}
            loading={loading}
            onPageChange={handleOnPageChange}
          />
        </Col>
      </Row>
    </DefaultLayout>
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

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Search from 'antd/lib/input/Search';
import { useRouter } from 'next/router';
import logger from '@common/utils/logger';
import TweetTable from '@components/TweetTable';
import { useHashTagElement } from './HashHook';
import { DefaultLayout } from '@components/Layout';

interface UrlProps {
  q: string;
  offset: string;
}

interface HashTagInitialProps {
  query: UrlProps
}

const HashTag = (props: UrlProps) => {
  const { offset } = props;
  const router = useRouter();
  const {
    hashTagResults,
    // count,
  } = useHashTagElement({ offset });
  // logger.debug('barbar', hashTags)
  const handleOnClick = (val: string): void => {
    // e.preventDefault();
    console.log(router.pathname, router.query, val); // tslint:disable-line
    router.push(router.pathname + '?q=foo+bar')
  }

  return (
    <DefaultLayout title="Hash Tag" desc="Tweet feed by hash tag">
      <h1>Hash Tag</h1>
      <Row>
        <Col sm={12} md={8}>
          <Search placeholder="Search by Hashtag" onSearch={handleOnClick} />
        </Col>
      </Row>
      <Row>
        <Col flex="flex" span={24}>
          <TweetTable data={hashTagResults} />
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

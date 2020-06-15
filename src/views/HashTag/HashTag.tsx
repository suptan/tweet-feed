import Button from 'antd/lib/button';
import { useRouter } from 'next/router';
import logger from '@common/utils/logger';
import { useHashTagElement } from './HashHook';

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
    hashTags,
  } = useHashTagElement({ offset });
  logger.debug('barbar', hashTags)
  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.preventDefault();
    console.log(router.pathname, router.query); // tslint:disable-line
    router.push(router.pathname + '?q=foo+bar')
  }

  return (
    <main>
      <h1>Hash Tag</h1>
      <Button type="primary" onClick={handleOnClick}>Click me</Button>
    </main>
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

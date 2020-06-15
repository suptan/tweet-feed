import Button from 'antd/lib/button';
import { useRouter } from 'next/router';

interface UrlProps {
  offset: string;
}

interface HashTagInitialProps {
  query: UrlProps
}

const HashTag = () => {
  const router = useRouter();
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
  console.log('offset', query); // tslint:disable-line
  return {
    query
  }
}

export default HashTag;

import hooks from '@hook';
import { UseHashTagElementParams, UseHashTagElement } from 'types';
import { useRouter } from 'next/router';
import logger from '@common/utils/logger';
import TweetHelper from '@common/utils/tweet-helper';

const useHashTagElement = ({ q, offset }: UseHashTagElementParams): UseHashTagElement => {
  logger.info(`Render HashTag with q=${q} offset=${offset}`)
  const router = useRouter();
  const { tweet, loading, setTweet, setLoading } = hooks.useTweetFeed({ q, offset, by: 'tag' });

  return {
    q,
    tweet,
    loading,
    setTweet,
    setLoading,
    handleOnSearch: (val: string): void => {
      logger.info(`Search feed by tag ${val}`);
      TweetHelper.onSearch(val, router);
    },
    handleOnPageChange: (page: number) => {
      logger.info(`Search feed by tag on page ${page}`);
      TweetHelper.onChangePage(page, router);
    },
  };
};

export {
  useHashTagElement,
}

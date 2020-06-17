import hooks from '@hook';
import { UseHashTagElementParams, UseHashTagElement, TweetTableSearchConfig } from 'types';
import { useRouter } from 'next/router';
import logger from '@common/utils/logger';
import TweetHelper from '@common/utils/tweet-helper';

const useHashTagElement = ({ q, offset }: UseHashTagElementParams): UseHashTagElement => {
  logger.info(`Render HashTag with q=${q} offset=${offset}`)
  const router = useRouter();
  const { tweet, loading, setTweet, setLoading } = hooks.useTweetFeed({ q, offset, by: 'tag' });
  const search: TweetTableSearchConfig = {
    q,
    label: 'Hashtag search',
    placeholder: 'Search by Hashtag',
    onSearch: (val: string) => {
      logger.info(`Search feed by tag ${val}`);
      TweetHelper.onSearch(val, router);
    },
  };

  return {
    tweet,
    loading,
    search,
    setTweet,
    setLoading,
    handleOnPageChange: (page: number): void => {
      logger.info(`Search feed by tag on page ${page}`);
      TweetHelper.onChangePage(page, router);
    },
  };
};

export {
  useHashTagElement,
}

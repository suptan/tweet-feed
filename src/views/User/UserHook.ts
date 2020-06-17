import { UseUserElement, TweetTableSearchConfig } from "types";
import { useRouter } from "next/router";
import logger from "@common/utils/logger";
import hooks from '@hook';
import { UserProps } from "./User";
import tweetHelper from "@common/utils/tweet-helper";

const useUserElement = ({ q, offset }: UserProps): UseUserElement => {
  logger.info(`Render User with q=${q} offset=${offset}`)
  const router = useRouter();
  const { tweet, loading, setTweet, setLoading } = hooks.useTweetFeed({ q, offset, by: 'users' });
  const search: TweetTableSearchConfig = {
    q,
    label: 'User search',
    placeholder: 'Search by User',
    onSearch: (val: string) => {
      logger.info(`Search feed by tag ${val}`);
      tweetHelper.onSearch(val, router);
    },
  };

  return {
    q,
    loading,
    tweet,
    setTweet,
    setLoading,
    search,
    handleOnPageChange: (page: number) => {
      logger.info(`Search feed by user on page ${page}`);
      tweetHelper.onChangePage(page, router);
    },
  };
};

export {
  useUserElement,
}

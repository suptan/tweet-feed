import { UseUserElement } from "types";
import { useRouter } from "next/router";
import logger from "@common/utils/logger";
import hooks from '@hook';
import { UserProps } from "./User";
import tweetHelper from "@common/utils/tweet-helper";

const useUserElement = ({ q, offset }: UserProps): UseUserElement => {
  logger.info(`Render User with q=${q} offset=${offset}`)
  const router = useRouter();
  const { tweet, loading, setTweet, setLoading } = hooks.useTweetFeed({ q, offset, by: 'users' });

  return {
    q,
    loading,
    tweet,
    setTweet,
    setLoading,
    handleOnSearch: (val: string): void => {
      logger.info(`Search feed by user ${val}`);
      tweetHelper.onSearch(val, router);
    },
    handleOnPageChange: (page: number) => {
      logger.info(`Search feed by user on page ${page}`);
      tweetHelper.onChangePage(page, router);
    },
  };
};

export {
  useUserElement,
}

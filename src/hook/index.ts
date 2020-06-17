import { UseTweetFeedParams, APITweet, UseTweetFeed } from "types";
import { useState, useEffect } from "react";
import message from 'antd/lib/message';
import api from '@api';
import logger from '@common/utils/logger';

const useTweetFeed = ({ q, offset, by }: UseTweetFeedParams): UseTweetFeed => {
  const [tweet, setTweet] = useState<APITweet>();
  const [loading, setLoading] = useState<boolean>(false);
  const displayError = 'Could not connect to server. Please check your internet connection and try again.';

  useEffect(() => {
    setLoading(true);

    if (by === 'users') {
      api.getFeedByUser({
        q,
        offset,
      })
        .then((res: APITweet) => {
          setTweet(res)
        })
        .catch((err: Error) => {
          logger.error('GET HashTag', err);
          message.error(displayError);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    else {
      api.getFeedByHashTag({
        q,
        offset,
      })
        .then((res: APITweet) => {
          setTweet(res)
        })
        .catch((err: Error) => {
          logger.error('GET HashTag', err)
          message.error(displayError);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [q, offset, by]);

  return {
    tweet,
    loading,
    setTweet,
    setLoading,
  };
}

export default {
  useTweetFeed,
}

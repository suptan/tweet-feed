import getConfig from 'next/config';
import { isEmpty } from 'lodash'
import { GetTweetParams, APITweet } from "types";
import http from '@common/utils/http-helper';

const { publicRuntimeConfig: { FETCH_LIMIT } } = getConfig();

// TODO, split files base on resource type
const getFeedByHashTag = async ({
  q = 'python',
  offset = 0
}: GetTweetParams): Promise<APITweet> => {
  const newTag = isEmpty(q) ? 'python' : q;
  const data = await http.getRequest({
    path: `hashtags/${newTag}`,
    queryString: `offset=${offset}&limit=${FETCH_LIMIT}`,
  });

  return data;
};

const getFeedByUser = async ({
  q,
  offset = 0,
}: GetTweetParams): Promise<APITweet> => {
  const newUser = isEmpty(q) ? 'raymondh' : q;
  const data = await http.getRequest({
    path: `users/${newUser}`,
    queryString: `offset=${offset}&limit=${FETCH_LIMIT}`,
  });

  return data;
}

export default {
  getFeedByHashTag,
  getFeedByUser,
}

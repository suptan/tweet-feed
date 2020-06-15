import { GetFeedByHashTagParams, APIHashTag } from "types";
import http from '@common/utils/http-helper';
import logger from "@common/utils/logger";

// TODO, split files base on resource type
const getFeedByHashTag = async ({
  q = 'python',
  offset = 0
}: GetFeedByHashTagParams): Promise<APIHashTag[]> => {
  const data = await http.getRequest({
    path: `hashtags/${q}`,
    queryString: `offset=${offset}`,
  });

  logger.debug('rr', data)

  return data;
};

export default {
  getFeedByHashTag,
}

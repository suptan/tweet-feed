import { UseHashTagsParams, APIHashTag, UseHashTag } from "types";
import { useState, useEffect } from "react";
import api from '@api';
import logger from '@common/utils/logger';

const useHashTags = ({ q, offset }: UseHashTagsParams): UseHashTag => {
  const [hashTag, setHashTag] = useState<APIHashTag>();

  useEffect(() => {
    api.getFeedByHashTag({
      offset,
    })
      .then((res: APIHashTag) => setHashTag(res))
      .catch((err: Error) => {
        logger.error('GET HashTag', err)}
      );
  }, [q, offset])

  return {
    hashTag,
    setHashTag,
  };
};

export default {
  useHashTags,
}

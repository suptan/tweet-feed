import { UseHashTagsParams, APIHashTag, UseHashTags } from "types";
import { useState, useEffect } from "react";
import api from '@api';
import logger from '@common/utils/logger';

const useHashTags = ({ q, offset }: UseHashTagsParams): UseHashTags => {
  const [hashTags, setHashTags] = useState<APIHashTag[]>([]);

  useEffect(() => {
    api.getFeedByHashTag({
      offset,
    })
      .then((res: APIHashTag[]) => setHashTags(res))
      .catch((err: Error) => {
        logger.error('GET HashTag', err)}
      );
  }, [q, offset])

  return {
    hashTags,
    setHashTags,
  };
};

export default {
  useHashTags,
}

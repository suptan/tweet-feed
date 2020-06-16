import getConfig from 'next/config';
import { isEmpty, get, map } from 'lodash';
import dayjs from 'dayjs';
import hooks from '@hook';
import { UseHashTagElementParams, UseHashTagElement } from 'types';
import { NextRouter, useRouter } from 'next/router';
import { useState } from 'react';
import { objectToQueryString } from '@common/utils/url-helper';
import logger from '@common/utils/logger';

const { publicRuntimeConfig: { FETCH_LIMIT } } = getConfig();

const onSearch = (val: string, router: NextRouter): void => {
  logger.info(`Search feed from tag ${val}`)
  const query = isEmpty(val) ? '' : val;
  const newQuery = {
    ...router.query,
    q: query,
  };
  const queryUrl = objectToQueryString(newQuery);
  router.push(router.pathname + '?' + queryUrl);
}

const onChangePage = (page: number, router: NextRouter): void => {
  const offset = (page - 1) * FETCH_LIMIT;
  const newQuery = {
    ...router.query,
    offset,
  };
  const queryUrl = objectToQueryString(newQuery);
  router.push(router.pathname + '?' + queryUrl)
}

const useHashTagElement = ({ q, offset }: UseHashTagElementParams): UseHashTagElement => {
  logger.info(`Render HashTag with q=${q} offset=${offset}`)
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false)
  const { hashTag, setHashTag } = hooks.useHashTags({ q, offset, setLoading });
  const count = get(hashTag, 'count', 0);
  const hashTagResults = map(get(hashTag, 'results'), ({
    likes,
    replies,
    retweets,
    hashtags,
    date,
    ...rest
  }) => ({
    ...rest,
    likes: likes || '-',
    replies: replies || '-',
    retweets: retweets || '-',
    hashtags: hashtags.slice(0, 2),
    date: dayjs(date).format('MMM D, YYYY'),
  }));
  // tslint:disable-next-line: no-bitwise
  const currentPage = ((Number(offset) / FETCH_LIMIT) | 0) + 1;
  const totalPage = (count >= FETCH_LIMIT ? currentPage + 1 : currentPage) * FETCH_LIMIT;

  return {
    q,
    hashTagResults,
    totalPage,
    currentPage,
    hashTag,
    loading,
    setHashTag,
    handleOnSearch: (val: string) => onSearch(val, router),
    handleOnPageChange: (page: number) => onChangePage(page, router),
  };
};

export {
  useHashTagElement,
}

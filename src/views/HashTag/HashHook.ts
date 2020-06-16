import getConfig from 'next/config';
import { isEmpty } from 'lodash';
import hooks from '@hook';
import { UseHashTagElementParams, UseHashTagElement } from 'types';
import { NextRouter, useRouter } from 'next/router';
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
  const { tweet, loading, setTweet, setLoading } = hooks.useTweetFeed({ q, offset, by: 'tag' });

  return {
    q,
    tweet,
    loading,
    setTweet,
    setLoading,
    handleOnSearch: (val: string) => onSearch(val, router),
    handleOnPageChange: (page: number) => onChangePage(page, router),
  };
};

export {
  useHashTagElement,
}

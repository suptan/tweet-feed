import getConfig from 'next/config';
import { isEmpty } from 'lodash';
import { NextRouter } from 'next/router';
import { objectToQueryString } from '@common/utils/url-helper';
import logger from '@common/utils/logger';

const { publicRuntimeConfig: { FETCH_LIMIT } } = getConfig();

const onSearch = (val: string, router: NextRouter): void => {
  const query = isEmpty(val) ? '' : val;
  const newQuery = {
    ...router.query,
    q: query,
  };
  const queryUrl = objectToQueryString(newQuery);
  const newUrl = router.pathname + '?' + queryUrl;
  logger.info(`redirect to ${newUrl}`);
  router.push(newUrl);
}

const onChangePage = (page: number, router: NextRouter): void => {
  const offset = (page - 1) * FETCH_LIMIT;
  const newQuery = {
    ...router.query,
    offset,
  };
  const queryUrl = objectToQueryString(newQuery);
  const newUrl = router.pathname + '?' + queryUrl;
  logger.info(`redirect to ${newUrl}`);
  router.push(newUrl);
}

export default {
  onSearch,
  onChangePage,
}

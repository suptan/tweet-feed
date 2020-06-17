import getConfig from 'next/config';
import axios from 'axios';
import { HttpGetRequestParams } from 'types';
import logger from './logger';

const { publicRuntimeConfig: { WEB_API_DOMAIN, PROXY_URL } } = getConfig();

const instance = axios.create({
  baseURL: WEB_API_DOMAIN,
});

const getRequest = async ({
  path, queryString = '',
}: HttpGetRequestParams) => new Promise<any>(async (resolve, reject) => {
  const url = path + '?' + queryString;

  logger.info(`GET ${url}`);

  instance.get(url)
    .then((response) => resolve(response.data))
    .catch(error =>{
      logger.error(`GET ${path} ${error.message}`, error)
      // Use proxy as fallback
      instance.get(url, {
        baseURL: PROXY_URL + WEB_API_DOMAIN
      })
        .then((response) => resolve(response.data))
        .catch(proxyError => reject(new Error(`GET ${path} ${proxyError.message}`)))
    });
});

export default {
  getRequest,
}

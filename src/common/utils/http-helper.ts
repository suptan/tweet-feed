import getConfig from 'next/config';
import axios from 'axios';
import { HttpGetRequestParams } from 'types';

const { publicRuntimeConfig: { WEB_API_DOMAIN } } = getConfig();

const instance = axios.create({
  baseURL: WEB_API_DOMAIN,
});

const getRequest = async ({
  path, queryString = '',
}: HttpGetRequestParams) => new Promise<any>(async (resolve, reject) => {
  const url = path + '?' + queryString;
  instance.get(url)
    .then((response) => resolve(response.data))
    .catch(error => reject(new Error(`GET ${path} ${error.message}`)));
});

export default {
  getRequest,
}

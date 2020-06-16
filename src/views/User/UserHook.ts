import { UseUserElement } from "types";
import { NextRouter, useRouter } from "next/router";
import logger from "@common/utils/logger";
import hooks from '@hook';
import { UserProps } from "./User";


const onSearch = (val: string, router: NextRouter) => {
  logger.info(`Search feed from user ${val}`)
  router.push(router.pathname + '?');
}

const onChangePage = (page: number, router: NextRouter): void => {
//   const offset = (page - 1) * FETCH_LIMIT;
//   const newQuery = {
//     ...router.query,
//     offset,
//   };
//   const queryUrl = objectToQueryString(newQuery);
  router.push(router.pathname + '?' + page)
}

const useUserElement = ({ q, offset }: UserProps): UseUserElement => {
  logger.info(`Render User with q=${q} offset=${offset}`)
  const router = useRouter();
  const { tweet, loading, setTweet, setLoading } = hooks.useTweetFeed({ q, offset, by: 'users' });

  return {
    q,
    loading,
    tweet,
    setTweet,
    setLoading,
    handleOnSearch: (val: string) => onSearch(val, router),
    handleOnPageChange: (page: number) => onChangePage(page, router),
  };
};

export {
  useUserElement,
}

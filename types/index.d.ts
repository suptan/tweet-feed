import "@testing-library/jest-dom/extend-expect";
import { Dispatch } from "react";
import { TablePaginationConfig } from "antd/lib/table";

export interface UrlProps {
  q?: string;
  offset?: string;
}

export interface HttpGetRequestParams {
  path: string;
  id?: string | number;
  queryString?: string;
}

export interface WrapperProps {
  children: ReactElement;
}

export interface UserAccount {
  fullname: string;
  href: string;
  id: number;
}

export interface GetTweetParams {
  q?: string;
  offset?: string | number;
}

export interface APITweetResults {
  account: UserAccount;
  date: string;
  hashtags: string[];
  likes: number;
  replies: number;
  retweets: number;
  text: string;
}

export interface APITweet {
  count: number;
  offset: number;
  results: APITweetResults[];
}

// TODO, compare usage with TweetTableProps
export interface UseTweetFeedParams {
  q?: string | undefined;
  offset?: string | number | undefined;
  by: string;
}

export interface UseTweetFeed {
  tweet: APITweet | undefined;
  loading: boolean;
  setTweet: Dispatch<SetStateAction<APITweet>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface UseHashTagElementParams {
  q?: string | undefined;
  offset?: string | undefined;
}

export interface UseHashTagElement extends UseTweetFeed {
  q?: string | undefined;
  handleOnSearch: (val: string) => void;
  handleOnPageChange: (page: number, pageSize?: number | undefined) => void;
}

// TODO, compare usage with TweetTableProps
export interface UseTweetTableElementParams {
  data: APITweet | undefined;
  onPageChange: (page: number, pageSize?: number | undefined) => void;
}

export interface UseTweetTableElement {
  columns: ColumnType<any>[];
  dataSource: any[];
  pagination: TablePaginationConfig;
  scroll: RcTableProps<RecordType>['scroll'] & {
    scrollToFirstRowOnChange?: boolean;
  };
}

export interface UseUserElement extends UseTweetFeed {
  q?: string | undefined;
  handleOnSearch: (val: string) => void;
  handleOnPageChange: (page: number, pageSize?: number | undefined) => void;
}

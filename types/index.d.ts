import "@testing-library/jest-dom/extend-expect";
import { Dispatch } from "react";
import { TablePaginationConfig } from "antd/lib/table";
import { PaginationConfig } from "antd/lib/pagination";

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

export interface GetFeedByHashTagParams {
  q?: string;
  offset?: string | number;
}

export interface GetFeedByHashTagResults {
  account: UserAccount;
  date: string;
  hashtags: string[];
  likes: number;
  replies: number;
  retweets: number;
  text: string;
}

export interface APIHashTag {
  count: number;
  offset: number;
  results: GetFeedByHashTagResults[];
}

// TODO, compare usage with TweetTableProps
export interface UseHashTagsParams {
  q?: string | undefined;
  offset?: string | number | undefined;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface UseHashTag {
  hashTag: APIHashTag | undefined;
  setHashTag: Dispatch<SetStateAction<APIHashTag>>;
}

export interface UseHashTagElementParams {
  q?: string | undefined;
  offset?: string | undefined;
}

export interface UseHashTagElement extends UseHashTag {
  hashTagResults: GetFeedByHashTagResults[] | undefined;
  totalPage: number;
  currentPage: number;
  loading: boolean;
  handleOnSearch: (val: string) => void
}

// TODO, compare usage with TweetTableProps
export interface UseTweetTableElementParams {
  data: any[] | undefined;
  totalPage: number;
  currentPage: number;
}

export interface UseTweetTableElement {
  columns: ColumnType<any>[];
  dataSource: any[];
  pagination: TablePaginationConfig;
}

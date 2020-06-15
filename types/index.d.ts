import "@testing-library/jest-dom/extend-expect";
import { Dispatch } from "react";

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

export interface UseHashTagsParams {
  q?: string | undefined;
  offset?: string | number | undefined;
}

export interface UseHashTags {
  hashTags: APIHashTag[];
  setHashTags: Dispatch<SetStateAction<APIHashTag[]>>;
}

export interface UseHashTagElementParams {
  offset: string;
}

export interface UseHashTagElement extends UseHashTags {
  r?: undefined;
}

import "@testing-library/jest-dom/extend-expect";

export interface HttpGetRequestParams {
  path: string;
  id?: string | number;
  queryString?: string;
}

export interface WrapperProps {
  children: ReactElement;
}

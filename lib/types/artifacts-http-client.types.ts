export type RequestParams = {
  method?: string;
  path?: string;
  query?: Record<string, any>;
  body?: Record<string, any>;
  isSecure?: boolean;
  headers?: Record<string, any>;
};

export type GetRequestParams = {
  isSecure?: boolean;
  query?: Record<string, any>;
};

export type PostRequestParams = {
  isSecure?: boolean;
  body?: Record<string, any>;
  headers?: Record<string, any>;
};

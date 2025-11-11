export type RequestParams = {
  method?: string;
  path?: string;
  query?: Record<string, unknown>;
  body?: Record<string, unknown> | Record<string, unknown>[];
  isSecure?: boolean;
  headers?: Record<string, unknown>;
};

export type GetRequestParams = {
  isSecure?: boolean;
  query?: Record<string, unknown>;
};

export type PostRequestParams = {
  isSecure?: boolean;
  body?: Record<string, unknown> | Record<string, unknown>[];
  headers?: Record<string, unknown>;
};

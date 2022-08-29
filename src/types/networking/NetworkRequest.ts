export type NetworkRequest = {
  url: string;
  /**
   * The HTTP Method for this request
   * When unspecified, suwatte defaults to a GET request
   */
  method?:
    | "GET"
    | "POST"
    | "CONNECT"
    | "HEAD"
    | "OPTIONS"
    | "PATCH"
    | "PUT"
    | "QUERY"
    | "TRACE";
  params?: Record<string, any>;
  body?: Record<string, any>;
  headers?: Record<string, string>;

  // TODO
  timeout?: number;
  maxRetries?: number;
};

export type NetworkRequestConfig = Omit<NetworkRequest, "url" | "method">;

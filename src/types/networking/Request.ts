import {
  NetworkRequestTransformer,
  NetworkResponseTransformer,
} from "./Transformer";

type RequestMethod =
  | "GET"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "POST"
  | "PUT"
  | "PATCH"
  | "PURGE"
  | "LINK"
  | "UNLINK";

type RequestHeaders = Record<string, string | number | boolean>;

export type Cookie = {
  name: string;
  value: string;
};

export type BasicURL = {
  url: string;
  params?: Record<string, any>;
};

export type NetworkRequest = {
  /** The URL where the request will be sent. */
  url: string;

  /**
   * The HTTP method for the request. This is a string that can be one of several
   * standard HTTP methods (like "GET", "POST", "PUT", etc.) or a custom method.
   * When this property is not specified, it defaults to a GET request.
   */
  method?: RequestMethod | string;

  /** An object representing any parameters to be included in the URL of the request. These will be formatted as query parameters. */
  params?: Record<string, any>;

  /**
   * An object representing the body of the request. Depending on the Content-Type header,
   * this can either be send as a JSON object (for application/json) or a URL-encoded string (for application/x-www-form-urlencoded).
   */
  body?: Record<string, any>;

  /** An object representing any additional headers to be included in the request. */
  headers?: RequestHeaders;

  /** An array of cookies to be included in the request. */
  cookies?: Cookie[];

  /** The maximum time to wait for the request to complete, in milliseconds. If the request takes longer than this, it will be aborted. */
  timeout?: number;

  /** The maximum number of times to retry the request if it fails. After this many failures, the request will not be retried again. */
  maxRetries?: number;

  /**
   * A function or array of functions that transform the request before it is sent.
   * Each function takes a NetworkRequest and returns a transformed NetworkRequest.
   */
  transformRequest?: NetworkRequestTransformer | NetworkRequestTransformer[];

  /**
   * A function or array of functions that transform the response after it is received.
   * Each function takes a NetworkResponse and returns a transformed NetworkResponse.
   */
  transformResponse?: NetworkResponseTransformer | NetworkResponseTransformer[];

  /**
   * A function that determines whether a given status code is considered successful.
   * This function takes a status code as input and returns true if the status code is
   * considered a success status, and false otherwise.
   */
  validateStatus?: (s: number) => boolean;
};

/**
 * NetworkRequestConfig is a type that represents the configuration for a NetworkRequest. It's 
the same as NetworkRequest, but without the "url" and "method" properties. This is typically 
used when the URL and method are provided separately from the rest of the configuration. e.g the `NetworkClient.post` & `NetworkClient.get` methods
 */
export type NetworkRequestConfig = Omit<NetworkRequest, "url" | "method">;

export const name = async (base: RequestHeaders, known?: RequestHeaders) => {
  return {
    ...base,
    ...known,
  };
};

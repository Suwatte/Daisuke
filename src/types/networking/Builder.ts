import { Cookie } from "./Request";
import {
  NetworkRequestTransformer,
  NetworkResponseTransformer,
} from "./Transformer";

/**
 * NetworkClientBuilder is a builder class used for creating and configuring instances of NetworkClient.
 * The builder allows you to configure various aspects of the NetworkClient, such as rate limits,
 * request/response transformers (interceptors), headers, cookies, timeout, status validator, and more.
 */
export class NetworkClientBuilder {
  // Array of functions that transform requests
  private requestTransformers: NetworkRequestTransformer[] = [];

  // Array of functions that transform responses
  private responseTransformers: NetworkResponseTransformer[] = [];

  // Object representing HTTP headers, where each key-value pair represents a header
  private headers: Record<string, string> = {};

  // Array of cookies
  private cookies: Cookie[] = [];

  // The maximum time to wait for a request to complete, in milliseconds
  private timeout?: number;

  // The number of requests allowed per second
  private requestsPerSecond?: number;

  // A function that determines whether a status code is considered successful
  private statusValidator?: (s: number) => boolean;

  // The maximum number of retries for a request
  private maxRetries?: number;

  /**
   * Sets the rate limit for the NetworkClient.
   *
   * @param requests - The maximum number of requests to make per interval.
   * @param interval - The length of the rate limiting interval in seconds.
   * @returns The builder, to allow for method chaining.
   */
  setRateLimit(requests: number, interval: number): NetworkClientBuilder {
    this.requestsPerSecond = requests / interval;
    return this;
  }

  /**
   * Adds a request interceptor to the NetworkClient.
   *
   * @param transformer - The interceptor to add. This should be a function that takes a request and modifies it in some way.
   * @returns The builder, to allow for method chaining.
   */
  addRequestInterceptor(
    transformer: NetworkRequestTransformer
  ): NetworkClientBuilder {
    this.requestTransformers.push(transformer);
    return this;
  }

  /**
   * Adds a response interceptor to the NetworkClient.
   *
   * @param transformer - The interceptor to add. This should be a function that takes a response and modifies it in some way.
   * @returns The builder, to allow for method chaining.
   */
  addResponseInterceptor(
    transformer: NetworkResponseTransformer
  ): NetworkClientBuilder {
    this.responseTransformers.push(transformer);
    return this;
  }

  /**
   * Sets the authorization token for the NetworkClient.
   *
   * @param token - The token to be included in the Authorization header of every request.
   * @returns The builder, to allow for method chaining.
   */
  setAuthorizationToken(token: string): NetworkClientBuilder {
    return this.addHeader("Authorization", token);
  }

  /**
   * Sets the status validator for the NetworkClient.
   *
   * @param validator - A function that takes a status code and returns true if it is considered successful.
   * @returns The builder, to allow for method chaining.
   */
  setStatusValidator(validator: (s: number) => boolean): NetworkClientBuilder {
    this.statusValidator = validator;
    return this;
  }

  /**
   * Sets the timeout for requests made by the NetworkClient.
   *
   * @param timeout - The maximum time to wait for a request to complete, in milliseconds.
   * @returns The builder, to allow for method chaining.
   */
  setTimeout(timeout: number): NetworkClientBuilder {
    this.timeout = timeout;
    return this;
  }

  /**
   * Sets the maximum number of retries for this request by the NetworkClient.
   *
   * @param retries - The maximum number of retries for this request
   * @returns The builder, to allow for method chaining.
   */
  setMaxRetries(retries: number): NetworkClientBuilder {
    this.maxRetries = retries;
    return this;
  }

  /**
   * Sets a header for the NetworkClient.
   *
   * @param key - The name of the header
   * @param value - The value of the header
   * @returns The builder, to allow for method chaining.
   */
  addHeader(key: string, value: string): NetworkClientBuilder {
    this.headers[key] = value;
    return this;
  }

  /**
   * Sets a cookie for the NetworkClient.
   *
   * @param cookie - The cookie to be included in every request.
   * @returns The builder, to allow for method chaining.
   */
  addCookie(cookie: Cookie): NetworkClientBuilder {
    this.cookies.push(cookie);
    return this;
  }

  /**
   * Builds a NetworkClient using the parameters set on the builder.
   *
   * @returns A NetworkClient with the configured parameters.
   */
  build(): NetworkClient {
    return new NetworkClient(this);
  }
}

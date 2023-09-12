import { NetworkClientBuilder } from "./Builder";
import { NetworkRequestConfig, NetworkRequest } from "./Request";
import { NetworkResponse } from "./Response";

declare global {
  /**
   * NetworkClient is responsible for making HTTP requests.
   * It supports GET, POST, and custom requests.
   */
  class NetworkClient {
    constructor(builder?: NetworkClientBuilder);
    /**
     * Makes a POST request to the specified URL.
     *
     * @param url - The URL to send the request to.
     * @param config - Optional configuration for the request.
     * @returns A Promise that resolves to the response.
     */
    post(url: string, config?: NetworkRequestConfig): Promise<NetworkResponse>;

    /**
     * Makes a GET request to the specified URL.
     *
     * @param url - The URL to send the request to.
     * @param config - Optional configuration for the request.
     * @returns A Promise that resolves to the response.
     */
    get(url: string, config?: NetworkRequestConfig): Promise<NetworkResponse>;

    /**
     * Makes a custom HTTP request.
     *
     * @param req - The details of the request to make.
     * @returns A Promise that resolves to the response.
     */
    request(req: NetworkRequest): Promise<NetworkResponse>;
  }
}

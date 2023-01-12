import { NetworkRequest, NetworkRequestConfig } from "./NetworkRequest";
import { NetworkResponse } from "./NetworkResponse";

export * from "./NetworkRequest";
export * from "./NetworkResponse";

declare global {
  class NetworkClient {
    post(url: string, config?: NetworkRequestConfig): Promise<NetworkResponse>;
    get(url: string, config?: NetworkRequestConfig): Promise<NetworkResponse>;
    request(req: NetworkRequest): Promise<NetworkResponse>;

    // Interceptors
    requestInterceptHandler?: (req: NetworkRequest) => Promise<NetworkRequest>;
    responseInterceptHandler?: (
      res: NetworkResponse
    ) => Promise<NetworkRequest>;
  }
}

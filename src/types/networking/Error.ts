import { NetworkRequest } from "./Request";
import { NetworkResponse } from "./Response";

declare global {
  class NetworkError extends Error {
    req: NetworkRequest;
    res: NetworkResponse;
    constructor(
      name: string,
      message: string,
      req: NetworkRequest,
      res: NetworkResponse
    );
  }

  class CloudflareError extends Error {
    constructor();
  }
}

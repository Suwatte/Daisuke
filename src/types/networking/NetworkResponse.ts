import { NetworkRequest } from "./NetworkRequest";

export type NetworkResponse = {
  data: string;
  status: number;
  headers: Record<string, any>;
  request: NetworkRequest;
};

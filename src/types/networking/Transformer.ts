import { NetworkRequest } from "./Request";
import { NetworkResponse } from "./Response";

export type Transformer<T> = (v: T) => Promise<T>;
export type NetworkRequestTransformer = Transformer<NetworkRequest>;
export type NetworkResponseTransformer = Transformer<NetworkResponse>;

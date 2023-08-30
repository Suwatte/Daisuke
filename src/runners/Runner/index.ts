import { RunnerInfo } from "../../types";
export * from "./extensions";

export enum RunnerEnvironment {
  SOURCE,
  TRACKER,
}

export interface SuwatteRunner {
  readonly info: RunnerInfo;
  onEnvironmentLoaded?(): Promise<void>;
}

import { RunnerInfo, RunnerType } from "../types";

export abstract class DaisukeRunner {
  abstract readonly info: RunnerInfo;
  abstract readonly type: RunnerType;
}

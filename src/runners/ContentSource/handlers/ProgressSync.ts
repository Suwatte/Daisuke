import { ContentProgressState } from "../../../types";

export interface ProgressSyncHandler {
  getProgressState(contentId: string): Promise<ContentProgressState>;
}

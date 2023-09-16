import { UpSyncedContent, DownSyncedContent } from "../../../types";

export interface LibrarySyncHandler {
  /**
   *
   * @param library Called to sync the users's in-app library with the current library state of the source
   */
  syncUserLibrary(library: UpSyncedContent[]): Promise<DownSyncedContent[]>;
}

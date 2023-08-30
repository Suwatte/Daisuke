import { ContentSource } from "..";
import { UpSyncedContent, DownSyncedContent } from "../../../types";

export interface ChapterSyncHandler {
  /**
   * Returns the IDS of chapters read
   * @param contentId The ID of the content requested
   */
  getReadChapterMarkers(contentId: string): Promise<string[]>;
}

export interface LibrarySyncHandler {
  /**
   *
   * @param library Called to sync the users's in-app library with the current library state of the source
   */
  syncUserLibrary(library: UpSyncedContent[]): Promise<DownSyncedContent[]>;
}

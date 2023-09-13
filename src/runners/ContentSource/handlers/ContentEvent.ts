import { ReadingFlag } from "../../../types";

export interface ContentEventHandler {
  // Content State Events
  /**
   * Called when contents for this source is added to the users library.
   * @param ids The Content IDS of titles added to the library
   */
  onContentsAddedToLibrary(ids: string[]): Promise<void>;

  /**
   * Called when content is removed from a users library.
   * @param ids The content ids of the titles removed from the users library.
   */
  onContentsRemovedFromLibrary(ids: string[]): Promise<void>;

  /**
   *
   * @param ids when contents reading flag is changed in the users library
   * @param flag the updated reading flag.
   */
  onContentsReadingFlagChanged(ids: string[], flag: ReadingFlag): Promise<void>;
}

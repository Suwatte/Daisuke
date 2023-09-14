import { ReaderContext } from "../../../types";

/**
 * This Method implements methods typically used for media server applications such as komga
 */
export interface StreamContextProvider {
  /**
   * If acquisition is enabled and a highlight is marked as streamable,
   *  suwatte will call this method to get the chapter to be requested by the `getChapterData` Method as well as other information to keep the data synced
   */
  provideReaderContext?(contentId: string): Promise<ReaderContext>;
}

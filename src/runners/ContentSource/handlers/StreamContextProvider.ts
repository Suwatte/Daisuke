import { Chapter, Highlight, ReadingMode } from "../../../types";

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

/**
 * This is the context provided to the reader to treat a highlight as a comic
 */
export type ReaderContext = {
  /**
   * The content being read, NOTE that this must be provided and the contentID should match the contentID of the content being read not the chapter
   */
  content: Highlight;
  /**
   * This is the Chapter ID of the chapter to be opened
   */
  target: string;

  /**
   * The List of chapters available for this "Content"
   */
  chapters: Chapter[];
  /**
   * The page index to open to in a 0-Index based array
   */
  requestedPageIndex?: number;
  /**
   * The Reading mode to open the reader to
   */
  readingMode?: ReadingMode;
};

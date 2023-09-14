import { Chapter } from "./Chapter";
import { ReadingMode } from "./Enums";
import { Highlight } from "./Highlight";

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

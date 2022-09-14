import { Provider } from ".";
import { ChapterData } from "./ChapterData";

export type Chapter = {
  /**
   * Identifier for this chapter
   */
  chapterId: string;

  /**
   * Content Identifier to which this chapter belongs to
   */
  contentId: string;

  /**
   * The Chapters Number
   */
  number: number;
  /**
   * The index of this chapter in relation to all chapters of the content.
   * With the latest available chapter having an index of 0
   */
  index: number;

  /**
   * URL At which the chapter is accessible on the web
   */
  webUrl?: string;

  /**
   * Date of Publication
   */
  date: Date;

  /**
   * Volume to which this chapter belongs
   */
  volume?: number;

  /**
   * Language Code of this chapter
   */
  language?: string;

  /**
   * Title of chapter
   */
  title?: string;

  /**
   * Included ChapterData
   */
  data?: ChapterData;

  /**
   * Chapter Providers
   */
  providers?: Provider[];
};

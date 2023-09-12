import { Provider } from "../content/Provider";
import { ChapterData } from "./ChapterData";

export type Chapter = {
  /**
   * Identifier for this chapter in relation to the Content
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
   *
   * The First Most Available Chapter Should Have an Index of 0
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
   * Language Code of this chapter in ISO-6379
   *
   * Read More: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
   */
  language: string;
  /**
   * Title of chapter
   */
  title?: string;
  /**
   * Included {@link ChapterData}
   */
  data?: ChapterData;

  /**
   * The Chapters {@link Provider}'s
   */
  providers?: Provider[];

  /**
   * The Thumbnail Image of the Chapter
   */
  thumbnail?: string;
};

export enum DefinedLanguages {
  UNIVERSAL = "UNIVERSAL",
  ENGLISH = "en_US",
  KOREAN = "ko_KR",
  JAPANESE = "ja_JP",
  FRENCH = "fr_FR",
  CHINESE = "zh-CN",
  SPANISH = "es_ES",
  PORTUGUESE = "pt_BR",
}

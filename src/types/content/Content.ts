import { Chapter } from "./Chapter";
import { HighlightCollection } from "./Collection";
import { BaseInfo } from "./Highlight";
import { NonInteractiveProperty, Property } from "./Property";
import { TrackerInfo } from "./TrackerInfo";

export type Content = BaseInfo & {
  /**
   * URL to which content is accessible on web
   */
  webUrl?: string;
  /**
   * The Publication Status of Content
   * * Default to {@link Status.UNKNOWN} if `undefined`
   */
  status?: Status;

  /**
   * Names of creators of the publication; Artists, Authors etc
   */
  creators?: string[];
  /**
   * Summary / Description of the content
   */
  summary?: string;

  /**
   * Indicates Content Contains Adult Imagery / Text.
   * * Defaults to `false` if `undefined`
   */
  adultContent?: boolean;

  /**
   * Other Names of the Publication
   */
  additionalTitles?: string[];

  /**
   * Properties of the publication
   */
  properties?: Property[];

  /**
   * Content Type of the publication
   */
  contentType?: ContentType;

  /**
   * recommended reading mode
   */
  recommendedReadingMode?: ReadingMode;

  /**
   * Properties that are non-tappable
   */
  nonInteractiveProperties?: NonInteractiveProperty[];
  /**
   * Collections to Display in Profile View
   */
  includedCollections?: HighlightCollection[];
  /**
   * Tracker ID's for this content
   */
  trackerInfo?: TrackerInfo;
  /**
   * Most Websites can parse both chapters and content information on the same page. Use this property to populate the content chapters.
   * * If defined, suwatte does not make a subsequent {@link getChapters} method call.
   */
  chapters?: Chapter[];
};

export enum Status {
  UNKNOWN,
  ONGOING,
  COMPLETED,
  CANCELLED,
  HIATUS,
}
/**
 * The method in which the content can be read
 */
export enum ReadingMode {
  PAGED_MANGA, // Page 2 <---- Page 1
  PAGED_COMIC, // Page 1 ----> Page 2
  VERTICAL,
  VERTICAL_SEPARATED, // Vertical with Slight Gap Between Pages
  NOVEL, // Opens In Novel Reader
  WEB, // Opens using the chapters WebUrl
}

export enum ReadingFlag {
  READING,
  PLANNED,
  COMPLETED,
  DROPPED,
  REREADING,
  PAUSED,
  UNKNOWN,
}
export enum ContentType {
  NOVEL,
  MANGA,
  MANHUA,
  MANHWA,
  COMIC,
  UNKNOWN,
}
export type URLContentIdentifier = {
  chapterId?: string;
  contentId: string;
};

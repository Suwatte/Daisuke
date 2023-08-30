import { Chapter } from "./Chapter";
import { HighlightCollection } from "./Collection";
import { Highlight } from "./Highlight";
import { NonInteractiveProperty, Property } from "./Property";

// Enums
export enum PublicationStatus {
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
  PAGED_VERTICAL,
  WEBTOON,
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
  NOVEL, // Deprecated in v6.0
  MANGA,
  MANHUA,
  MANHWA,
  COMIC,
  UNKNOWN,
}

export type Content = Highlight & {
  /**
   * URL to which content is accessible on web
   */
  webUrl?: string;
  /**
   * The Publication Status of Content
   *
   * Note: Defaults to UNKNOWN if not defined.
   */
  status?: PublicationStatus;
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
   *
   * Defaults to false if not defined
   */
  nsfw?: boolean;
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
   *
   * defaults to UNKNOWN if not defined
   */
  contentType?: ContentType;
  /**
   * The Reading Mode recommended by the source based on available data.
   *
   * defaults to PAGED_COMIC if not defined
   */
  recommendedPanelMode?: ReadingMode;

  /**
   * Indicates that this title is a novel
   */
  isNovelTitle?: boolean;
  /**
   * Properties that are non-interactive in-app. This should be used to display miscellaneous information in app.
   */
  nonInteractiveProperties?: NonInteractiveProperty[];
  /**
   * Additional Collections to display.
   *
   * Useful for display stuff like recommended Content
   */
  includedCollections?: HighlightCollection[];
  /**
   * The Content's defined Tracking ID's.
   */
  trackerInfo?: Record<string, string>;
  /**
   * The content's chapters.
   *
   * Most websites display both the content information and chapters on the same page. Use to property to populate the chapters is such is the case
   *
   * Note: If Defined Suwatte will not make the subsequent requests required to get the content's chapters in the profile view.
   */
  chapters?: Chapter[];
};

export type ContentIdentifier = {
  chapterId?: string;
  contentId: string;
};

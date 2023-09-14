import { BaseItem } from "./BaseItem";
import { Chapter } from "./Chapter";
import { HighlightCollection } from "./Collection";
import { PublicationStatus, ContentType, ReadingMode } from "./Enums";
import { Property } from "./Property";

export type Content = BaseItem & {
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
   * Additional Collections to display.
   *
   * Useful for display stuff like recommended Content
   */
  collections?: HighlightCollection[];
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

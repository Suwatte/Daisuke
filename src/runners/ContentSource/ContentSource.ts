import {
  Content,
  Chapter,
  ChapterData,
  RunnerInfo,
  ContentIdentifier,
  Highlight,
  Property,
} from "../../types";
import { DirectoryHandler, SuwatteRunner } from "../Runner";

export type SourceConfig = {
  /**
   * When `true`, suwatte will not cache the retrieved {@link ChapterData}
   */
  disableChapterDataCaching?: boolean;
  /**
   * When `true`, suwatte will disable the option to sort by dates and will hide the date label for chapters
   */
  disableChapterDates?: boolean;
  /**
   * When `true`, suwatte will hide the flag icon for the chapter tile
   */
  disableLanguageFlags?: boolean;
  /**
   * When `true`, suwatte will disable being able to view more titles of a provided tags
   */
  disableTagNavigation?: boolean;
  /**
   * When `true`, suwatte will not check for updates on this source
   */
  disableUpdateChecks?: boolean;
  /**
   * When `true`, suwatte will disable the ability to add/remove titles on this source from the user's library
   */
  disableLibraryActions?: boolean;
  /**
   * When `true`, suwatte will disable the ability to link trackers to titles from this source
   */
  disableTrackerLinking?: boolean;
  /**
   * When `true`, suwatte will disable the ability to set custom thumbnails for titles on this source
   */
  disableCustomThumbnails?: boolean;
  /**
   * When `true`, suwatte will disable the ability to link titles from other sources to this source
   */
  disableContentLinking?: boolean;

  /**
   * When `true`, suwatte will barr this source from being a possible migration destination
   */
  disableMigrationDestination?: boolean;

  /**
   * This should be a url suwatte will navigate to, if not defined suwatte will use the provided source website
   */
  cloudflareResolutionURL?: string;
};

interface SourceCore extends SuwatteRunner {
  info: RunnerInfo;
  config?: SourceConfig;
}

// ---------- Content Source ---------- //
export interface ContentSource extends SourceCore, DirectoryHandler<Highlight> {
  /// ------------- Content Reading ------------- ///
  /**
   * Gets the titles information from the source
   */
  getContent(contentId: string): Promise<Content>;

  /**
   * Gets the chapters of the specified content.
   */
  getChapters(contentId: string): Promise<Chapter[]>;
  getChapterData(contentId: string, chapterId: string): Promise<ChapterData>;

  /// ------------- Content Searching ------------- ///
  /**
   * Gets the search results for the source.
   */

  /// ------------- Deep Link ------------- ///
  getIdentifierForURL(url: string): Promise<ContentIdentifier | null>;

  /**
   * Called to get tags available on the source
   */
  getTags?(): Promise<Property[]>;
}

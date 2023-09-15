import {
  Content,
  Chapter,
  ChapterData,
  RunnerInfo,
  Property,
} from "../../types";
import { DirectoryHandler, SuwatteRunner } from "../Runner";

export type SourceConfig = {
  /**
   * When `true`, suwatte will not cache the retrieved {@link ChapterData}
   */
  readonly disableChapterDataCaching?: boolean;
  /**
   * When `true`, suwatte will disable the option to sort by dates and will hide the date label for chapters
   */
  readonly disableChapterDates?: boolean;
  /**
   * When `true`, suwatte will hide the flag icon for the chapter tile
   */
  readonly disableLanguageFlags?: boolean;
  /**
   * When `true`, suwatte will disable being able to view more titles of a provided tags
   */
  readonly disableTagNavigation?: boolean;
  /**
   * When `true`, suwatte will not check for updates on this source
   */
  readonly disableUpdateChecks?: boolean;
  /**
   * When `true`, suwatte will disable the ability to add/remove titles on this source from the user's library
   */
  readonly disableLibraryActions?: boolean;
  /**
   * When `true`, suwatte will disable the ability to link trackers to titles from this source
   */
  readonly disableTrackerLinking?: boolean;
  /**
   * When `true`, suwatte will disable the ability to set custom thumbnails for titles on this source
   */
  readonly disableCustomThumbnails?: boolean;
  /**
   * When `true`, suwatte will disable the ability to link titles from other sources to this source
   */
  readonly disableContentLinking?: boolean;

  /**
   * When `true`, suwatte will barr this source from being a possible migration destination
   */
  readonly disableMigrationDestination?: boolean;

  /**
   * This should be a url suwatte will navigate to, if not defined suwatte will use the provided source website
   */
  readonly cloudflareResolutionURL?: string;

  /**
   * Indicates whether a user can create multiple instances of this runner. Defaults to false
   */
  readonly allowsMultipleInstances?: boolean;

  /**
   * These are the domains on which the runner can handle deep links on
   */
  readonly owningLinks?: string[];

  /**
   * This indicates that this runner will require the user to sign in to access it's content
   */
  readonly requiresAuthenticationToAccessContent?: boolean;
};

interface SourceCore extends SuwatteRunner {
  info: RunnerInfo;
  config?: SourceConfig;
}

// ---------- Content Source ---------- //
export interface ContentSource extends SourceCore, DirectoryHandler {
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

  /**
   * Called to get tags available on the source
   */
  getTags?(): Promise<Property[]>;
}

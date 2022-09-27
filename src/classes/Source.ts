import {
  SourceInfo,
  RunnerType,
  Content,
  Chapter,
  ChapterData,
  SearchRequest,
  SearchSort,
  PagedResult,
  Filter,
  Property,
  URLContentIdentifier,
  Tag,
  TrackerInfo,
  Highlight,
  User,
  PreferenceGroup,
  SyncedContent,
  CollectionExcerpt,
  ReadingFlag,
  ExploreCollection,
  NetworkRequest,
  ActionGroup,
} from "../types";
import { DaisukeRunner } from ".";

export abstract class Source implements DaisukeRunner {
  abstract readonly info: SourceInfo;
  readonly type: RunnerType = RunnerType.CONTENT_SOURCE;

  // Content
  abstract getContent(contentId: string): Promise<Content>;
  abstract getChapters(contentId: string): Promise<Chapter[]>;
  abstract getChapterData(
    contentId: string,
    chapterId: string
  ): Promise<ChapterData>;

  // Searching
  abstract getSearchResults(query: SearchRequest): Promise<PagedResult>;
  getSearchFilters?(): Promise<Filter[]>;
  getSearchSorters?(): Promise<SearchSort[]>;

  // Explore
  createExploreCollections?(): Promise<CollectionExcerpt[]>;
  resolveExploreCollection?(
    excerpt: CollectionExcerpt
  ): Promise<ExploreCollection>;
  getExplorePageTags?(): Promise<Tag[]>;

  // Tags
  abstract getSourceTags(): Promise<Property[]>;

  // Source Handlers
  handleIdentifierForUrl?(url: string): Promise<URLContentIdentifier | null>;
  handleMatchTracker?(trackerInfo: TrackerInfo): Promise<Highlight[]>;

  //  Source Preferences & Actions
  getUserPreferences?(): Promise<PreferenceGroup[]>;
  getSourceActions?(): Promise<ActionGroup[]>;

  // Source State Events
  /**
   * Called After the source is successfully initialized in app.
   */
  onSourceLoaded?(): Promise<void>;
  didTriggerAction?(key: string): Promise<void>;

  // Content State Events
  onContentsAddedToLibrary?(ids: string[]): Promise<void>;
  onContentsRemovedFromLibrary?(ids: string[]): Promise<void>;
  onContentsReadingFlagChanged?(
    ids: string[],
    flag: ReadingFlag
  ): Promise<void>;
  // Chapter State Events
  /**
   * Called when the "Mark" state of a chapter/chapters changes, manually or as a result of syncing
   */
  onChaptersMarked?(
    contentId: string,
    chapterIds: string[],
    completed: boolean
  ): Promise<void>;

  /**
   * Called when a chapter is read/completed by the user.
   * Is only called as a result of completing a chapter in the reader
   */
  onChapterRead?(contentId: string, chapterId: string): Promise<void>;

  // Network Request Events
  willAttemptCloudflareVerification?(): Promise<string>;
  willRequestImage?(request: NetworkRequest): Promise<NetworkRequest>;
  // Authentication
  handleBasicAuth?(identifier: string, password: string): Promise<void>;
  getAuthenticatedUser?(): Promise<User | null>;
  handleUserSignOut?(): Promise<void>;

  // TODO: WebView & OAuth Auth
  // handleWebViewAuth?(): Promise<void>;
  // getOAuthRequest?(): Promise<NetworkRequest>;
  // handleOAuthResponse?(): Promise<NetworkResponse>;
  // didMigrateLibrary?(added: string[], removed: string[]): Promise<void>;

  // Sync Related
  getUserLibrary?(): Promise<SyncedContent[]>;
  getReadChapterMarkers?(contentId: string): Promise<string[]>;
}

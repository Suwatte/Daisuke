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
} from "../types";
import { DaisukeRunner } from "./runner";

export abstract class Source implements DaisukeRunner {
  abstract readonly info: SourceInfo;
  readonly type: RunnerType = RunnerType.CONTENT_SOURCE;

  playground?(): Promise<void>;

  // Content
  abstract getContent(contentId: string): Promise<Content>;
  abstract getChapters(contentId: string): Promise<Chapter[]>;
  abstract getChapterData(
    contentId: string,
    chapterId: string
  ): Promise<ChapterData>;

  // * Searching
  abstract getSearchResults(query: SearchRequest): Promise<PagedResult>;
  getSearchFilters?(): Promise<Filter[]>;
  getSearchSorters?(): Promise<SearchSort[]>;

  // * Explore
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

  //  Source Preferences
  getUserPreferences?(): Promise<PreferenceGroup[]>;

  // Source State Events
  onSourceLoaded?(): Promise<void>;
  onContentsAddedToLibrary?(ids: string[]): Promise<void>;
  onContentsRemovedFromLibrary?(ids: string[]): Promise<void>;
  onChaptersCompleted?(contentId: string, chapterIds: string[]): Promise<void>;
  onContentsReadingFlagChanged?(
    ids: string[],
    flag: ReadingFlag
  ): Promise<void>;

  // Request Events
  willAttemptCloudflareVerification?(): Promise<string>;

  // Authentication
  handleBasicAuth?(identifier: string, password: string): Promise<void>;
  getAuthenticatedUser?(): Promise<User | null>;
  handleUserSignOut?(): Promise<void>;

  // TODO: WebView & OAuth Auth
  // handleWebViewAuth?(): Promise<void>;
  // getOAuthRequest?(): Promise<NetworkRequest>;
  // handleOAuthResponse?(): Promise<NetworkResponse>;

  // Sync Related
  getUserLibrary?(): Promise<SyncedContent[]>;
  getReadChapterMarkers?(contentId: string): Promise<string[]>;
}

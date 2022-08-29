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
  HighlightCollection,
  TrackerInfo,
  Highlight,
  AuthMethod,
  User,
  Preference,
  PreferenceGroup,
  SyncedContent,
  NetworkRequest,
  NetworkResponse,
  CollectionExcerpt,
  ReadingFlag,
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

  // Searching
  abstract getSearchResults(query: SearchRequest): Promise<PagedResult>;
  getSearchFilters?(): Promise<Filter[]>;
  getSearchSorters?(): Promise<SearchSort[]>;

  // Explore
  abstract getExplorePageCollections(
    register: (c: CollectionExcerpt) => void,
    resolve: (c: HighlightCollection) => void,
    reject: (id: string, e: Error) => void
  ): Promise<void>;

  abstract getExplorePageTags(): Promise<Tag[]>;
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

import { Badge, Either, Highlight, TrackItem } from "..";
import { DirectoryRequest } from "../directory";

/**
 * This object defines what page suwatte links to
 *
 * If DirectoryRequest is provided, A DirectoryView is presented, otherwise it navigates to another page
 */
export type Linkable = Either<
  { page: PageLink },
  { request: DirectoryRequest }
>;

export type PageLink = {
  /** The Key of this link */
  key: string;

  /**
   * Any Additional context that may be passed back to the runner
   */
  context?: Record<string, any>;
};

export type PageLinkLabel = {
  /**
   * The label of this link
   */
  title: string;
  subtitle?: string;
  badge?: Badge;

  /**
   * When a link is being displayed in a page section,use this to set the thumbnail to appear
   */
  cover?: string;

  /**
   * The actual Link of the label, it should either be a PageLink pointing to a page to be navigated to OR a directory request to display a directory layout for
   */
  link: Linkable;
};

export enum SectionStyle {
  DEFAULT,
  INFO,
  GALLERY,
  NAVIGATION_LIST,
  ITEM_LIST,
  PADDED_LIST,
  TAG,
  STANDARD_GRID,
}
/**
 * This defines a section within the page, if the `items` property is populated, the `resolvePageSection` will not be called as the section is treated as resolved
 */
export type PageSection<T> = {
  key: string;
  title: string;
  subtitle?: string;
  viewMoreLink?: Linkable;
  items?: PageItem<T>[];
  style?: SectionStyle;
};

export type SourcePageSection = PageSection<Highlight>;
export type TrackerPageSection = PageSection<TrackItem>;

export type ResolvedPageSection<T> = {
  items: PageItem<T>[];
  viewMoreLink?: Linkable;
  updatedTitle?: string;
  updatedSubtitle?: string;
};

export type PageItem<T> = Either<{ link: PageLinkLabel }, { item: T }>;
export type SourcePageItem = PageItem<Highlight>;
export type TrackerPageItem = PageItem<TrackItem>;

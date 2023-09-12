import { Badge, ContextProvider, Either, Highlight } from "..";
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

export type PageLink = ContextProvider & {
  id: string;
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
export type PageSection = {
  id: string;
  title: string;
  subtitle?: string;
  viewMoreLink?: Linkable;
  items?: Highlight[];
  style?: SectionStyle;
};

export type ResolvedPageSection = {
  items: Highlight[];
  viewMoreLink?: Linkable;
  updatedTitle?: string;
  updatedSubtitle?: string;
};

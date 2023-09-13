import {
  PageLinkLabel,
  ResolvedPageSection,
  PageLink,
  PageSection,
} from "../../../types/page";

/**
 * A PageLinkProvider is a runner intent that allows navigation from the library & browse page
 */
export interface PageLinkProvider {
  getLibraryPageLinks?(): Promise<PageLinkLabel[]>;
  getBrowsePageLinks?(): Promise<PageLinkLabel[]>;
}

/**
 * The Identifier of the page, suwatte will pass this as `home` to get the default homepage
 */
export type PageID = "home" | string;

/**
 * The PageLinkResolver intent allows custom pages to be shown rather than the default director view
 */
export interface PageLinkResolver {
  /**
   * Provides Sections for a page
   * @param link The Link To be Resolved
   */
  getSectionsForPage(link: PageLink): Promise<PageSection[]>;
  /**
   * Called After sections have been fetched but before they are resolved, the value returned will be passed into the `resolvePageSection` method
   * @param link
   */
  willResolveSectionsForPage?(link: PageLink): Promise<any | null>;
  resolvePageSection(
    link: PageLink,
    sectionID: string,
    pageContext?: any
  ): Promise<ResolvedPageSection>;
}

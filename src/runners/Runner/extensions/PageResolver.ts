import { PageLink, PageSection, ResolvedPageSection } from "../../../types";

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
  resolvePageSection(
    link: PageLink,
    sectionID: string
  ): Promise<ResolvedPageSection>;

  willResolveSectionsForPage?(link: PageLink): Promise<void>;
}

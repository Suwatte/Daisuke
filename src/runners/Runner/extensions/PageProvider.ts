import { Highlight, TrackItem } from "../../../types";
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
export type PageKey = "home" | string;

/**
 * The PageLinkResolver intent allows custom pages to be shown rather than the default director view
 */
export interface PageLinkResolver<T> {
  getSectionsForPage(link: PageLink): Promise<PageSection<T>[]>;
  willResolveSectionsForPage?(link: PageLink): Promise<void>;
  resolvePageSection(
    link: PageLink,
    sectionKey: string
  ): Promise<ResolvedPageSection<T>>;
}

export interface SourcePageLinkResolver extends PageLinkResolver<Highlight> {}
export interface TrackerPageLinkResolver extends PageLinkResolver<TrackItem> {}

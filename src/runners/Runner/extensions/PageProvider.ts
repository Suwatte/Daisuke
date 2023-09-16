import { PageLinkLabel } from "../../../types/page";

/**
 * A PageLinkProvider is a runner intent that allows navigation from the library & browse page
 */
export interface PageLinkProvider {
  getLibraryPageLinks?(): Promise<PageLinkLabel[]>;
  getBrowsePageLinks?(): Promise<PageLinkLabel[]>;
}

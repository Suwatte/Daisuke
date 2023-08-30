import { ContextProvider } from "../core";

export type Highlight = ContextProvider & {
  /**
   * Identifier for readable content on source
   */
  contentId: string;
  /**
   * Title of content
   */
  title: string;
  /**
   * Base Cover/Thumbnail for content
   */
  cover: string;

  /**
   * Additional Covers Provided
   */
  additionalCovers?: string[];

  /**
   * Additional Info that may be displayed with this highlight
   */
  info?: string[];

  /**
   * The Subtitle of the tile
   */
  subtitle?: string;

  /**
   * Badge to be displayed with the tile
   */
  badge?: Badge;

  /**
   * This should be the URL at which the title is acquirable/downloadable
   */
  acquisitionLink?: string;

  /**
   * if enabled suwatte will call the "provideReaderContext" to get the information required to properly read this title
   */
  streamable?: boolean;
};

/**
 * A Badge is added to a highlight tile
 */
export type Badge = {
  count?: number;
  color?: string;
};

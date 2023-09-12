import { ContextProvider } from "../core";
import { Linkable } from "../page";

export type ContentSourceItem = {
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
   * Additional Info that may be displayed with this content
   */
  info?: string[];
};

export type Highlight = ContentSourceItem &
  ContextProvider & {
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

    /**
     * Link Provided with this
     */
    link?: Linkable;

    /**
     * Marks this highlight as non interactive
     */
    noninteractive?: boolean;
  };

/**
 * A Badge is added to a highlight tile
 */
export type Badge = {
  count?: number;
  color?: string;
};

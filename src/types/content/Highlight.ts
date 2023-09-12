import { ContextProvider } from "../core";
import { Linkable } from "../page";
import { TrackEntry } from "../tracker";
import { BaseItem } from "./BaseItem";

export type Highlight = BaseItem &
  ContextProvider & {
    id: string;
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

    /**
     * The Tracker Entry of this Title
     *
     * NOTE: It will only be used on ContentTracker Pages & Directories
     */
    entry?: TrackEntry;
  };

/**
 * A Badge is added to a highlight tile
 */
export type Badge = {
  count?: number;
  color?: string;
};

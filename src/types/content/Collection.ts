import { z } from "zod";
import { ZHighlight } from "./Highlight";
import { ZSearchRequest } from "./SearchRequest";

export enum CollectionStyle {
  NORMAL,
  INFO,
  GALLERY,
  UPDATE_LIST,
}

// Schemas
export const ZCollectionExcerpt = z.object({
  /**
   * The ID of the Collection
   */
  id: z.string().min(1),
  /**
   * The Title of the Collection
   */
  title: z.string().min(1),
  /**
   * The Style in which this collection should be displayed
   */
  style: z.nativeEnum(CollectionStyle),
  /**
   * The Subtitle of the Collection.
   */
  subtitle: z.string().optional(),
  /**
   * The Search Request to be made to view more results from this collection
   */
  request: ZSearchRequest.optional(),
});

export const ZHighlightCollection = ZCollectionExcerpt.extend({
  /**
   * The Highlights/Titles to be displayed within this collection
   */
  highlights: z.array(ZHighlight),
});

export const ZExploreCollection = z.object({
  /**
   * The Populated Title of this Collection
   */
  title: z.string().optional(),
  /**
   * The Populated Subtitle of this collection.
   */
  subtitle: z.string().optional(),
  /**
   * The Highlights/Titles to be displayed within this collection
   */
  highlights: z.array(ZHighlight),
});

// Types
export type CollectionExcerpt = z.infer<typeof ZCollectionExcerpt>;
export type HighlightCollection = z.infer<typeof ZHighlightCollection>;
export type ExploreCollection = z.infer<typeof ZExploreCollection>;

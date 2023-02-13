import { z } from "zod";

// Schemas
export const ZBaseInteractable = z.object({
  /**
   * The ID of the Interactable Object
   */
  id: z.string().min(1),

  /**
   * The Label of the Interactable Object
   */
  label: z.string().min(1),
});

export const ZNonInteractiveProperty = ZBaseInteractable.extend({
  /**
   * The List of Non Interactable Properties
   */
  tags: z.array(z.string()),
});

export const ZTag = ZBaseInteractable.extend({
  /**
   * A boolean indicating the titles marked with this tag contain Adult Content
   */
  adultContent: z.boolean().optional(),
});

export const ZExploreTag = ZBaseInteractable.extend({
  filterId: z.string(),
  /**
   * A URL pointing to an image to display with this tag.
   *
   * This is used in the explore page.
   */
  imageUrl: z.string().url().optional(),
});

export const ZProperty = ZBaseInteractable.extend({
  /**
   * The List of Tags available under this property.
   */
  tags: z.array(ZTag),
});

// Types
export interface Property extends z.infer<typeof ZProperty> {}
export interface NonInteractiveProperty
  extends z.infer<typeof ZNonInteractiveProperty> {}
export interface Tag extends z.infer<typeof ZTag> {}
export interface SearchSort extends z.infer<typeof ZBaseInteractable> {}
export interface ExploreTag extends z.infer<typeof ZExploreTag> {}

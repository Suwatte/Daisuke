import { z } from "zod";
export const ZBaseInfo = z.object({
  /**
   * Identifier for readable content on source
   */
  contentId: z.string().min(1),

  /**
   * Title of content
   */
  title: z.string().min(1),

  /**
   * Base Cover/Thumbnail for content
   */
  cover: z.string().url(),

  /**
   * Additional Covers Provided
   */
  additionalCovers: z.array(z.string()).optional(),

  /**
   * Object for Populating INFO Styled Collections
   */
  stats: z
    .object({
      views: z.number().int().nonnegative().optional(),
      rating: z.number().nonnegative().optional(),
      follows: z.number().int().nonnegative().optional(),
    })
    .optional(),

  /**
   * Object for Populating LATEST styled Collections
   */
  updates: z
    .object({
      label: z.string().min(1),
      date: z.date().optional(),
      count: z.number().int().nonnegative().optional(),
    })
    .optional(),
});

export const ZHighlight = ZBaseInfo.merge(
  z.object({
    /**
     * The Subtitle of this Card/Highlight
     */
    subtitle: z.string().min(1).optional(),
    /**
     * Tags to be displayed with this title
     */
    tags: z.array(z.string().min(1)).optional(),
    /**
     * Additional Information about this Title
     */
    info: z.record(z.string()).optional(),
  })
);
export type BaseInfo = z.infer<typeof ZBaseInfo>;
export type Highlight = z.infer<typeof ZHighlight>;

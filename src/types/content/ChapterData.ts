import { z } from "zod";

export const ZChapterPage = z.object({
  /**
   * The URL of the Image
   */
  url: z.string().url().optional(),

  /**
   * The Image Data in the form of a base64-encoded string
   */
  raw: z.string().optional(),
});

export const ZChapterData = z.object({
  /**
   * The Chapter Identifier. Should be Unique in relation to the Content.
   */
  chapterId: z.string().min(1),
  /**
   * The Content Identifier of this Chapter, Should be Unique in relation to the Source
   */
  contentId: z.string().min(1),

  /**
   * The Text Content Of the Chapter. This is to be populated for Novel Sources
   *
   * Can be HTML or plain text
   */
  text: z.string().min(1).optional(),

  /**
   * The Pages of the chapter. This should be populated in standard Image Sources.
   */
  pages: z.array(ZChapterPage).optional(),
});

export interface ChapterData extends z.infer<typeof ZChapterData> {}
export interface ChapterPage extends z.infer<typeof ZChapterPage> {}

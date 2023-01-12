import { ZProvider } from ".";
import { ZChapterData } from "./ChapterData";
import { z } from "zod";

export const ZChapter = z.object({
  /**
   * Identifier for this chapter in relation to the Content
   */
  chapterId: z.string().min(1),

  /**
   * Content Identifier to which this chapter belongs to
   */
  contentId: z.string().min(1),
  /**
   * The Chapters Number
   */
  number: z.number().int(),
  /**
   * The index of this chapter in relation to all chapters of the content.
   *
   * The First Most Available Chapter Should Have an Index of 0
   */
  index: z.number().int().nonnegative(),
  /**
   * URL At which the chapter is accessible on the web
   */
  webUrl: z.string().url().optional(),
  /**
   * Date of Publication
   */
  date: z.date(),
  /**
   * Volume to which this chapter belongs
   */
  volume: z.number().int().nonnegative().optional(),
  /**
   * Language Code of this chapter
   */
  language: z.string().optional(),
  /**
   * Title of chapter
   */
  title: z.string().optional(),
  /**
   * Included {@link ChapterData}
   */
  data: ZChapterData.optional(),

  /**
   * The Chapters {@link Provider}'s
   */
  providers: z.array(ZProvider).optional(),
});

export type Chapter = z.infer<typeof ZChapter>;

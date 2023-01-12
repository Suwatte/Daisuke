import { z } from "zod";

export const ZTrackerInfo = z.object({
  /**
   * The Contents Anilist ID
   */
  al: z.string().optional(),
  /**
   * The Content's MyAnimeList ID
   */
  mal: z.string().optional(),

  /**
   * The Content's Kitsu ID
   */
  kt: z.string().optional(),

  /**
   * The Content's MangaUpdates ID
   */
  mu: z.string().optional(),
});

export type TrackerInfo = z.infer<typeof ZTrackerInfo>;

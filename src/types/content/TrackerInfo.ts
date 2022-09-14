export type TrackerInfo = {
  /**
   * Anilist ID
   */
  al?: string;
  /**
   * MyAnimelist ID
   */
  mal?: string;

  /**
   * Kitsu ID
   */
  kt?: string;

  /**
   * MangaUpdates ID
   */
  mu?: string;
} & Record<string, string>;

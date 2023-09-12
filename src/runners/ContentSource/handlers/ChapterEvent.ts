export interface ChapterEventHandler {
  /**
   * Called when the "Mark" state of a chapter/chapters changes, manually or as a result of syncing
   */
  onChaptersMarked(
    contentId: string,
    chapterIds: string[],
    completed: boolean
  ): Promise<void>;

  /**
   * Called when a chapter is read/completed by the user.
   *
   * Is only called as a result of completing a chapter in the reader
   */
  onChapterRead(contentId: string, chapterId: string): Promise<void>;

  /**
   * This method allows the progress to be synced on a per page basis
   */
  onPageRead?(
    contentId: string,
    chapterId: string,
    page: number
  ): Promise<void>;
}

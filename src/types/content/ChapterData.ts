export type ChapterPage = {
  /**
   * The URL of the Image
   */
  url?: string;
  /**
   * The Image Data in the form of a base64-encoded string
   */
  raw?: string;
};

export type ChapterData = {
  /**
   * The Chapter Identifier. Should be Unique in relation to the Content.
   */
  chapterId: string;
  /**
   * The Content Identifier of this Chapter, Should be Unique in relation to the Source
   */
  contentId: string;

  /**
   * The Pages of the chapter. This should be populated in standard Image Sources.
   */
  pages?: ChapterPage[];
};

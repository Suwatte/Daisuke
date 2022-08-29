export type ChapterData = {
  id: string;
  contentId: string;
  pages?: ChapterPage[];
  text?: string;
};

export type ChapterPage = {
  url?: string;
  raw?: string;
};

export type ContentProgressState = {
  readChapterIds?: string[];
  currentReadingState?: {
    chapterId: string;
    page: number;
    progress: number;
    readDate: Date;
  };
  markAllBelowAsRead?: {
    chapterNumber: number;
    chapterVolume?: number;
  };
};

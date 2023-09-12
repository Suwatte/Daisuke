// Enums
export enum PublicationStatus {
  UNKNOWN,
  ONGOING,
  COMPLETED,
  CANCELLED,
  HIATUS,
}
/**
 * The method in which the content can be read
 */
export enum ReadingMode {
  PAGED_MANGA, // Page 2 <---- Page 1
  PAGED_COMIC, // Page 1 ----> Page 2
  PAGED_VERTICAL,
  WEBTOON,
}

export enum ReadingFlag {
  READING,
  PLANNED,
  COMPLETED,
  DROPPED,
  REREADING,
  PAUSED,
  UNKNOWN,
}
export enum ContentType {
  MANGA,
  MANHUA,
  MANHWA,
  COMIC,
  NOVEL,
}

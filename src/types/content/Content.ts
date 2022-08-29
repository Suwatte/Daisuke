import { Chapter } from "./Chapter";
import { HighlightCollection } from "./Collection";
import { Highlight } from "./Highlight";
import { Property } from "./Property";
import { TrackerInfo } from "./TrackerInfo";

export type Content = {
  id: string;
  title: String;
  additionalTitles: string[];
  covers: string[];
  status: Status;
  originalLanguage: string | "UNKNOWN";
  creators: string[];
  summary: string;
  adultContent: boolean;
  url: string;
  properties: Property[];
  includedCollections?: HighlightCollection[];
  trackerInfo?: TrackerInfo;
  chapters?: Chapter[];
  recommendedReadingMode: ReadingMode;
  contentType: ContentType;
};

export enum Status {
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
  VERTICAL,
  VERTICAL_SEPARATED, // Vertical with Slight Gap Between Pages
  NOVEL, // Opens In Novel Reader
  WEB, // Opens using the chapters WebUrl
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
  NOVEL,
  MANGA,
  MANHUA,
  MANHWA,
  COMIC,
  UNKNOWN,
}
export type URLContentIdentifier = {
  chapterId?: string;
  contentId: string;
};

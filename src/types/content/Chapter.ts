import { Provider } from ".";
import { ChapterData } from "./ChapterData";

export type Chapter = {
  id: string;
  contentId: string;
  number: number;
  /**
   * Latest Chapter should have an index of 0
   */
  index: number;
  volume?: number;
  language: string;
  title?: string;
  date: Date;
  webUrl: string;
  data?: ChapterData;
  providers?: Provider[];
};

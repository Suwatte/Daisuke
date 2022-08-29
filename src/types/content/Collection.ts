import { Highlight } from "./Highlight";
import { SearchRequest } from "./SearchRequest";

export type CollectionExcerpt = {
  id: string;
  title: string;
  subtitle?: string;
  style: CollectionStyle;
};

export type HighlightCollection = CollectionExcerpt & {
  highlights: Highlight[];
  request?: SearchRequest;
};

export enum CollectionStyle {
  NORMAL,
  INFO,
  GALLERY,
  UPDATE_LIST,
}

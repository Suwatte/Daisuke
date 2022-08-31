import { Highlight } from "./Highlight";
import { SearchRequest } from "./SearchRequest";

export type CollectionExcerpt = {
  id: string;
  title: string;
  subtitle?: string;
  style: CollectionStyle;
  request?: SearchRequest;
};

export type HighlightCollection = CollectionExcerpt & {
  highlights: Highlight[];
};

export type ExploreCollection = {
  title?: string;
  subtitle?: string;
  highlights: Highlight[];
};
export enum CollectionStyle {
  NORMAL,
  INFO,
  GALLERY,
  UPDATE_LIST,
}

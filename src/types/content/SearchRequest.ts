import { SearchSort } from "./Property";

export type SearchRequest = {
  query?: string;
  page?: number;

  includedTags?: string[];
  excludedTags?: string[];

  sort?: SearchSort;
};

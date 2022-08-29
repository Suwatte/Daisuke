import { Highlight } from "./Highlight";

export type PagedResult = {
  results: Highlight[];
  page: number;
  isLastPage: boolean;
  totalResultCount?: number;
};

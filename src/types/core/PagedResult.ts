import { Highlight } from "../content";

export type PagedResult = {
  /**
   * The results on this page
   */
  results: Highlight[];
  /**
   * Boolean Indicating whether this is the last available page.
   *
   * If this value is true or the results count is 0, Suwatte will stop making subsequent pagination requests
   */
  isLastPage: boolean;

  /**
   * The Total Results Count
   */
  totalResultCount?: number;
};

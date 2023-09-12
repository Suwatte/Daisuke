import { Highlight } from "../content";
import { TrackItem } from "../tracker";

export type PagedResult<T> = {
  /**
   * The results on this page
   */
  results: T[];
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

export type SourcePagedResult = PagedResult<Highlight>;
export type TrackerPagedResult = PagedResult<TrackItem>;

import { z } from "zod";
import { ZHighlight } from "./Highlight";

export const ZPagedResult = z.object({
  /**
   * The Content Results
   */
  results: z.array(ZHighlight),
  /**
   * The Page Number of the parsed Results
   */
  page: z.number().int().nonnegative(),
  /**
   * Boolean Indicating whether this is the last available page.
   *
   * If this value is true or the results count is 0, Suwatte will stop making subsequent pagination requests
   */
  isLastPage: z.boolean(),

  /**
   * The Total Results Count
   */
  totalResultCount: z.number().int().nonnegative().optional(),
});
export interface PagedResult extends z.infer<typeof ZPagedResult> {}

import { z } from "zod";
import { ZFilter, ZPopulatedFilter } from "./Filter";

export const ZSearchRequest = z.object({
  /**
   * The Keywords the User would like to search
   */
  query: z.string().optional(),
  /**
   * The Page Number of the current search
   */
  page: z.number().int().nonnegative().optional(),
  /**
   * The User Selected Sort ID
   */
  sort: z.string().optional(),

  filters: z.array(ZPopulatedFilter).optional(),
});
export interface SearchRequest extends z.infer<typeof ZSearchRequest> {}

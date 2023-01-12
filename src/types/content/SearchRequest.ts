import { ZBaseInteractable } from "./Property";
import { z } from "zod";

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
   * IDS of all included Tags
   */
  includedTags: z.array(z.string()).optional(),
  /**
   * ids of all excluded Tags
   */
  excludedTags: z.array(z.string()).optional(),

  /**
   * The User Selected Sort Option
   */
  sort: ZBaseInteractable.optional(),
});
export type SearchRequest = z.infer<typeof ZSearchRequest>;

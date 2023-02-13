import { z } from "zod";
import { ZBaseInteractable } from "./Property";

export enum FilterType {
  TOGGLE,
  SELECT,
  MULTISELECT,
  EXCLUDABLE_MULTISELECT,
  TEXT,
  INFO,
}

export const ZFilter = z.object({
  /**
   * The ID of the filter
   */
  id: z.string().min(1),
  /**
   * The Title of the Filter
   */
  title: z.string().min(1),
  /**
   * The subtitle of the filter
   */
  subtitle: z.string().min(1).optional(),

  label: z.string().min(1).optional(),
  /**
   * The Filter Type
   */
  type: z.nativeEnum(FilterType),

  /**
   * The Filter's Options if the filter type is SELECT,MULTISELECT,EXCLUDABLE_SELECT
   */
  options: z.array(ZBaseInteractable).optional(),
});

export const ZPopulatedFilter = z.object({
  /**
   * The Id of the Filter
   */
  id: z.string().min(1),
  /**
   * The Boolean value if the filter is of type TOGGLE
   */
  bool: z.boolean().optional(),
  /**
   * The Text Value of the filter if the filter is of type TEXT
   */
  text: z.string().optional(),

  /**
   * The Included IDS of options if the filter is of type MULTISELECT,EXCLUDABLE_SELECT
   */
  included: z.array(z.string()).optional(),
  /**
   * The Excluded Option IDS if the filter is of text EXCLUDABLE_MULTISELECT
   */
  excluded: z.array(z.string()).optional(),
});

export interface Filter extends z.infer<typeof ZFilter> {}
export interface PopulatedFilter extends z.infer<typeof ZFilter> {}

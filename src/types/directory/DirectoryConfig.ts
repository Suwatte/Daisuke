import { Option } from "../core";
import { DirectoryFilter } from "./DirectoryFilter";

export type DirectoryConfig = {
  /**
   * Filters available
   */
  filters?: DirectoryFilter[];
  /**
   * Sort Options
   */
  sort?: {
    /**
     * Options Available
     */
    options: Option[];

    defaultKey: string;
    /**
     * Indicates whether the sort order can be configured as ascending or descending
     */
    canChangeOrder: boolean;
  };

  /**
   * If set to true, suwatte will display the search bar. Defaults to false
   */
  searchable?: boolean;
};

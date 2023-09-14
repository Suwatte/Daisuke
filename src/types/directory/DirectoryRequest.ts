import { ContextProvider } from "../core";
import { ExcludableMultiSelectProp } from "./DirectoryFilter";

export type FilterPrimitives =
  | string
  | string[]
  | boolean
  | number
  | ExcludableMultiSelectProp;
export type DirectoryRequest<T extends Record<string, FilterPrimitives> = any> =
  ContextProvider & {
    /**
     * The Keywords the User would like to search
     */
    query?: string;
    /**
     * The Page Number of the current search
     */
    page: number;
    /**
     * The User Selected Sort ID
     */
    sort?: SortSelection;

    /**
     * The populated filters with their mapped corresponding type
     */
    filters?: T;

    /**
     * When a user wants to view the entries in a single tag, this property will be populated with the tags identifier
     */
    tag?: {
      tagId: string;
      propertyId: string;
    };

    /**
     * Define the Configuration Suwatte should pass
     */
    configID?: string;
  };

export type SortSelection = {
  id: string;
  ascending?: boolean;
};

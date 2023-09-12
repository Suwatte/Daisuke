import { DirectoryRequest } from "../directory";
import { Highlight } from "./Highlight";

export type HighlightCollection = {
  /**
   * The ID of the Collection
   */
  id: string;
  /**
   * The Title of the Collection
   */
  title: string;
  /**
   * The Subtitle of the Collection.
   */
  subtitle?: string;

  /**
   * The Highlights/Titles to be displayed within this collection
   */
  highlights: Highlight[];

  /**
   * The Directory Request to be made to view more results from this collection
   */
  request?: DirectoryRequest;
};

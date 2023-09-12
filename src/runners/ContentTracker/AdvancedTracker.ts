import { DirectoryHandler } from "..";
import { FullTrackItem } from "../../types";

export interface AdvancedTracker extends DirectoryHandler {
  /**
   * This is called to get the info required to prepare a "profile page" for the title
   */
  getFullInformation(id: string): Promise<FullTrackItem>;

  toggleFavorite(state: boolean): Promise<void>;
}

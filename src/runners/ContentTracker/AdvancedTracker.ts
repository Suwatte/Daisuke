import { DirectoryHandler } from "..";
import { TrackItem } from "../../types";
import { ContentTracker } from "./ContentTracker";

export interface AdvancedTracker extends DirectoryHandler<TrackItem> {
  /**
   * This is called to get the info required to prepare a "profile page" for the title
   */
  getFullInformation(id: string): void;

  /**
   * When A Content Source Title has an associated key that links to this tracker,
   * this method is called to get possible recommendations for the title
   */
  getRecommendedTitles?(id: string): Promise<TrackItem[]>;
}

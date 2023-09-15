import {
  Form,
  Highlight,
  RunnerInfo,
  TrackProgressUpdate,
  TrackStatus,
} from "../../types";
import { SuwatteRunner } from "../Runner";

export type TrackerConfig = {
  /**
   * These are keys to which sources providing the tracker id can link to, if this is not defined, suwatte will use the runner's  id
   */
  readonly linkKeys?: string[];
  readonly owningLinks?: string[];
};

export interface TrackerCore extends SuwatteRunner {
  readonly info: RunnerInfo;
  readonly config?: TrackerConfig;
}

/**
 * This Runner handles the implementation of tracking websites such as anilist, mal & kitsu
 */
export interface ContentTracker extends TrackerCore {
  /**
   * Called when the user reads a chapter later than what is currently tracked
   * @param id The ID of the title read
   * @param progress the updated reading progress
   */
  didUpdateLastReadChapter(
    id: string,
    progress: TrackProgressUpdate
  ): Promise<void>;

  /**
   * Called when a user wants to link contents to your tracker.
   * @param titles An array containing all the provided names of an entry.
   */
  getResultsForTitles(titles: string[]): Promise<Highlight[]>;

  /**
   * A tracker item with the current entry for a title
   * @param id The ID of the title being queried
   */
  getTrackItem(id: string): Promise<Highlight>;

  didUpdateStatus(id: string, status: TrackStatus): Promise<void>;

  /**
   * Called when the user wants to start tracking a previously untracked entry
   */
  beginTracking(id: string, status: TrackStatus): Promise<void>;

  /**
   * Builds the form for updating the user's track state for a title
   */
  getEntryForm(id: string): Promise<Form>;

  /**
   * Called when a user submits and updated entry form.
   * * The form will ONLY contain KV pairs of properties that have been updated
   * * The value of a property will be `null` if the user removes the property.
   * * `Date` values will be returned as an ISO8601 formatted string
   */
  didSubmitEntryForm(id: string, form: any): Promise<void>;
}

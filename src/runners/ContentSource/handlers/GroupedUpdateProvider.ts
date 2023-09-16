import { GroupedUpdateResponse } from "../../../types";

export interface GroupedUpdatesProvider {
  /**
   * When implemented suwatte will call this method to fetch titles that have been updated.
   * @param ids The of titles to update
   * @param date The date indicating the last time suwatte checked for updates on this source
   */
  getGroupedUpdates(ids: string[], date: Date): Promise<GroupedUpdateResponse>;
}

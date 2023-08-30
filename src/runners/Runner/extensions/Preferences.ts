import { PreferenceGroup } from "../../../types";

export interface UserPreferenceHandler {
  buildPreferenceMenu(): Promise<PreferenceGroup[]>;
}

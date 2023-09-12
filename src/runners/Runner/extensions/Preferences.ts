import { Form } from "../../../types";

export interface UserPreferenceHandler {
  getPreferenceMenu(): Promise<Form>;
}

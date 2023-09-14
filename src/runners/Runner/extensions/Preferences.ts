import { Form } from "../../../types";

export interface RunnerPreferenceProvider {
  getPreferenceMenu(): Promise<Form>;
}

import { BooleanState, Form } from "../../../types";

export interface RunnerSetupProvider {
  getSetupMenu(): Promise<Form>;
  validateSetupForm(data: unknown): Promise<void>;
  isRunnerSetup(): Promise<BooleanState>;
}

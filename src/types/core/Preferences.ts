export enum PreferenceType {
  select,
  multiSelect,
  stepper,
  toggle,
  textfield,
}

export interface Preference {
  // Core
  key: string;
  label: string;
  type: PreferenceType;
  defaultValue: string;

  // Select
  options?: SelectOption[];

  // Stepper
  /**
   * Defaults to 100
   */
  maxStepperValue?: number;
  /**
   * Default to 1
   */
  minStepperValue?: number;

  // Multiselect
  /**
   * Defaults to 1
   */
  minSelectionCount?: number;

  /**
   * Defaults to 10
   */
  maxSelectionCount?: number;
}

export type SelectOption = {
  label: string;
  value: string;
};

export type UIGroup = {
  id: string;
  header?: string;
  footer?: string;
};

export type PreferenceGroup = UIGroup & {
  children: Preference[];
};

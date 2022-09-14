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
  maxStepperValue?: number;
  minStepperValue?: number;

  // Multiselect
  minSelectionCount?: number;
  maxSelectionCount?: number;
}

export type SelectOption = {
  label: string;
  value: string;
};

export interface PreferenceGroup {
  id: string;
  header?: string;
  footer?: string;
  children: Preference[];
}

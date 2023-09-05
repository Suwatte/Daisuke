// Picker

import {
  UIComponentType,
  UIElement,
  UIInteractable,
  UISelectable,
} from "./UIElements";

export type UIPickerDefinition = UIElement<UIComponentType.SELECT> &
  UISelectable &
  UIInteractable<string>;

// Multi Picker
export type UIMultiPickerOptions = UISelectable & {
  minSelectionCount?: number;
  maxSelectionCount?: number;
};

export type UIMultiPickerDefinition = UIElement<UIComponentType.MULTISELECT> &
  UIMultiPickerOptions &
  UIInteractable<string[]>;

// Toggle
export type UIToggleDefinition = UIElement<UIComponentType.TOGGLE> &
  UIInteractable<boolean>;

// Textfield
export type UITextFieldOptions = {
  placeholder?: string;
  secure?: boolean;
  keyboard?: "alphanumeric" | "numeric" | "email";
  multiline?: boolean;
};
export type UITextFieldDefinition = UIElement<UIComponentType.TEXTFIELD> &
  UITextFieldOptions &
  UIInteractable<string>;

// DatePicker
export type UIDatePickerDefinition = UIElement<UIComponentType.DATEPICKER> &
  UIInteractable<Date>;

// Stepper
export type UIStepperOptions = {
  upperBound?: number; // Defaults to infinity
  lowerBound?: number; // Defaults to 0
  allowDecimal?: true | "true"; // Defaults false if not defined
  step?: 10 | 1 | 0.1; // Defaults to 1
};

export type UIStepperDefinition = UIElement<UIComponentType.STEPPER> &
  UIStepperOptions &
  UIInteractable<number>;

// Button
export type UIButtonOptions = {
  isDestructive?: boolean;
  systemImage?: string;
  action: () => Promise<void>;
};

export type UIButtonDefinition = UIElement<UIComponentType.BUTTON>;

import {
  UIPickerDefinition,
  UIMultiPickerOptions,
  UIMultiPickerDefinition,
  UIToggleDefinition,
  UITextFieldOptions,
  UITextFieldDefinition,
  UIDatePickerDefinition,
  UIButtonOptions,
  UIButtonDefinition,
  UIStepperDefinition,
  UIStepperOptions,
} from "./UIDefinitions";
import {
  UISelectable,
  UIInteractable,
  UIComponentType,
  UISectionChild,
} from "./UIElements";

export const UIPicker = (
  props: UISelectable & UIInteractable<string>
): UIPickerDefinition => ({
  ...props,
  type: UIComponentType.SELECT,
});

export const UIMultiPicker = (
  props: UIMultiPickerOptions & UIInteractable<string[]>
): UIMultiPickerDefinition => ({
  ...props,
  type: UIComponentType.MULTISELECT,
});
export const UIToggle = (
  props: UIInteractable<boolean>
): UIToggleDefinition => ({
  ...props,
  type: UIComponentType.TOGGLE,
});

export const UITextField = (
  props: UITextFieldOptions & UIInteractable<string>
): UITextFieldDefinition => ({
  ...props,
  type: UIComponentType.TEXTFIELD,
});

export const UIDatePicker = (
  props: UIInteractable<Date>
): UIDatePickerDefinition => ({
  ...props,
  type: UIComponentType.DATEPICKER,
});

export const UIButton = (
  props: UIButtonOptions & UISectionChild
): UIButtonDefinition => ({
  ...props,
  type: UIComponentType.BUTTON,
});

export const UIStepper = (
  props: UIStepperOptions & UIInteractable<number>
): UIStepperDefinition => ({
  ...props,
  type: UIComponentType.STEPPER,
});

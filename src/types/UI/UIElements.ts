import { Option } from "../core";

export type UISectionChild = {
  key: string;
  label: string;
};

export type UISection<T extends UISectionChild> = {
  header?: string;
  footer?: string;
  children: T[];
};

export enum UIComponentType {
  SELECT,
  MULTISELECT,
  STEPPER,
  TOGGLE,
  TEXTFIELD,
  BUTTON,
  DATEPICKER,
}

export type Primitive = boolean | string | number | string[] | Date;

export type UIElement<T extends UIComponentType> = UISectionChild & {
  type: T;
};

export type UISelectable = {
  options: Option[];
};

export type UIInteractable<T extends Primitive> = UISectionChild & {
  value?: T;
  optional?: true | "true"; // if this value is defined, the interactable element MUST be optional
  didChange?: (value: T) => Promise<void>;
};

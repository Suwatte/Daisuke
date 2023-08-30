export * from "./Form";
export * from "./Preference";
export * from "./TrackerForm";
export type UISectionChild = {
  key: string;
  label: string;
};

export type UISection<T extends UISectionChild> = {
  header?: string;
  footer?: string;
  children: T[];
};

export type UIComponentType =
  | "picker"
  | "stepper"
  | "multipicker"
  | "textfield"
  | "button"
  | "toggle"
  | "datepicker";

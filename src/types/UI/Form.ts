type UIElementType = "select" | "multiselect" | "toggle" | "textfield";

type KeyLabel = {
  key: string;
  label: string;
};

type Option = {
  label: string;
  value: string;
};

// UI Elements
type UIElement<T extends UIElementType> = KeyLabel & {
  type: T;
};

type Picker = UIElement<"select"> & {
  options: Option[];
  default?: string;
};
type MultiPicker = UIElement<"multiselect"> & {
  options: Option[];
  default?: string[];
  minSelectionCount?: number;
  maxSelectionCount?: number;
};
type Toggle = UIElement<"toggle"> & {
  default?: boolean;
};

type TextField = UIElement<"textfield"> & {
  placeholder?: string;
  secure?: boolean;
  keyboard?: "alphanumeric" | "numeric" | "email";
};

// Form
export type FormSection = {
  id: string;
  header?: string;
  footer?: string;
  children: UIElement<any>[];
};

export type Form<T> = {
  sections: FormSection[];
  onSubmit: (values: T) => void;
};

type IElement<T> = Omit<T, "type">;
// UI Methods
export const UIPicker = (props: IElement<Picker>): Picker => ({
  ...props,
  type: "select",
});
export const UIMultiPicker = (props: IElement<MultiPicker>): MultiPicker => ({
  ...props,
  type: "multiselect",
});
export const UIToggle = (props: IElement<Toggle>): Toggle => ({
  ...props,
  type: "toggle",
});

export const UITextField = (props: IElement<TextField>): TextField => ({
  ...props,
  type: "textfield",
});

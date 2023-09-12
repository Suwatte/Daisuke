import { UIElement, UISection } from "./UIElements";

export type FormSection = UISection<UIElement<any>>;

export type Form = {
  sections: FormSection[];
};

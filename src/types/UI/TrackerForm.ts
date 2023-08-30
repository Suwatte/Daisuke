import { UIComponentType, UISection, UISectionChild } from ".";
import { Option } from "../core";
// ---------- Components ---------- //
type Primitive = boolean | string | number | string[] | Date;

type TrackFormComponent<T extends Primitive> = UISectionChild & {
  currentValue?: T | null;
  notRequired?: true | "true";
};

type TypedTrackFromComponent<T extends Primitive> = TrackFormComponent<T> & {
  type: UIComponentType;
};

type TrackUIStepper = TrackFormComponent<number> & {
  upperBound?: number;
  lowerBound?: number;
  allowDecimal?: true | "true";
  step?: 10 | 1 | 0.1;
};
type TrackUIPicker = TrackFormComponent<string> & {
  options: Option[];
};
type TrackUIMultiPicker = TrackFormComponent<string[]> & {
  options: Option[];
  currentValue?: string[];
  maxSelections?: number;
  minSelections?: number;
};

/**
 * Helper Function to generate a `TrackForm` Toggle Component
 */
export const TrackFormToggle = (
  props: TrackFormComponent<boolean>
): TypedTrackFromComponent<boolean> => ({ ...props, type: "toggle" });
/**
 * Helper Function to generate a `TrackForm` DatePicker Component
 */
export const TrackFormDatePicker = (
  props: TrackFormComponent<Date>
): TypedTrackFromComponent<Date> => ({ ...props, type: "datepicker" });

/**
 * Helper Function to generate a `TrackForm` Textfield Component
 */
export const TrackFormTextField = (
  props: TrackFormComponent<string>
): TypedTrackFromComponent<string> => ({ ...props, type: "textfield" });

/**
 * Helper Function to generate a `TrackForm` Stepper Component
 */
export const TrackFormStepper = (
  props: TrackUIStepper
): TypedTrackFromComponent<number> => ({ ...props, type: "stepper" });

/**
 * Helper Function to generate a `TrackForm` Picker Component
 */
export const TrackFormPicker = (
  props: TrackUIPicker
): TypedTrackFromComponent<string> => ({ ...props, type: "picker" });

/**
 * Helper Function to generate a `TrackForm` MultiPicker Component
 */
export const TrackFormMultiPicker = (
  props: TrackUIMultiPicker
): TypedTrackFromComponent<string[]> => ({ ...props, type: "multipicker" });

// ---------- Form ---------- //
export type TForm = {
  sections: UISection<TypedTrackFromComponent<Primitive>>[];
};

/**
 * Helper Function to generate a `TrackForm` Component
 */
export const TrackForm = (form: TForm) => form;

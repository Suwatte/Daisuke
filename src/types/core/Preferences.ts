import { z } from "zod";

export enum PreferenceType {
  select,
  multiSelect,
  stepper,
  toggle,
  textfield,
}

// Schemas
export const ZSelectionOption = z.object({
  /**
   * The label of this selection
   */
  label: z.string(),
  /**
   * The value of the selection, This must be unique in relation to it's parent preference
   */
  value: z.string(),
});
export const ZPreference = z.object({
  /**
   * The Unique Key which is used to identify this Preference
   */
  key: z.string().min(1),
  /**
   * The Name of the Preference
   */
  label: z.string().min(1),
  /**
   * The Type of Preference Option
   *
   * This affects how it will be displayed within the app and what additional properties will be used
   */
  type: z.nativeEnum(PreferenceType),

  /**
   * The Default Value of this preference
   *
   * Note: Each preference type have different ways of parsing it's values
   * * SELECT - The Value of the option
   * * MULTISELECT - A comma separated string containing the values of the selected options
   * * STEPPER - The Numerical Value as a string
   * * Toggle - The Boolean value as a string
   * * Textfield - The Inputted Text.
   */
  defaultValue: z.string(),

  /**
   * The Options available for this preference
   *
   * This is **only** used when preference type is either SELECT or MULTISELECT
   */
  options: z.array(ZSelectionOption),

  // * ---
  /**
   * The Minimum Possible Stepper Value
   *
   * This is **only** used when the preference type is set to STEPPER
   */
  minStepperValue: z.number().optional(),
  /**
   * The Maximum Possible Stepper Value
   *
   * This is **only** used when the preference type is set to STEPPER
   */
  maxStepperValue: z.number().optional(),

  // * ---
  /**
   * The Minimum Number of selections possible
   *
   * This is **only** used when the preference type is set to MULTISELECT
   */
  minSelectionCount: z.number().optional(),
  /**
   * The maximum Number of selections possible
   *
   * This is **only** used when the preference type is set to MULTISELECT
   */
  maxSelectionCount: z.number().optional(),
});

export const ZUIGroup = z.object({
  /**
   * The ID of this UIGroup
   *
   * This will be displayed as a section within a list in-app
   */
  id: z.string().min(1),
  /**
   * The Header to be displayed for this group
   */
  header: z.string().optional(),
  /**
   * The Footer to be displayed for this group
   */
  footer: z.string().optional(),
});

export const ZPreferenceGroup = ZUIGroup.extend({
  /**
   * The preferences to be displayed within this UIGroup
   */
  children: z.array(ZPreference),
});

// Types
export interface SelectionOption extends z.infer<typeof ZSelectionOption> {}
export interface Preference extends z.infer<typeof ZPreference> {}
export interface UIGroup extends z.infer<typeof ZUIGroup> {}
export interface PreferenceGroup extends z.infer<typeof ZPreferenceGroup> {}

import { Option } from "../core";

export enum FilterType {
  /**
   * This Represents the filter as a toggle switch, the value returned in the directory request will be a `boolean`
   */
  TOGGLE,
  /**
   * This represents the filter as a picker, the value returned will be the `key` of the selected option as a `string`
   */
  SELECT,

  /**
   * This Represents the filter as a multi-picker, the value returned will the the keys of the selected options as an array of strings
   */
  MULTISELECT,

  /**
   * This Represents the filter as a multi-picker,the value returned will be of type {@link ExcludableMultiSelectProp}
   */
  EXCLUDABLE_MULTISELECT,

  /**
   * This will represent the filter as a textfield, the value returned will be a string
   */
  TEXT,

  /**
   * This is a basic filter that will only display the title or subtitle, it will not return any value in the populated `DirectoryRequest`
   */
  INFO,
}

export type DirectoryFilter = {
  /**
   * The ID of the filter
   */
  id: string;
  /**
   * The Title of the Filter
   */
  title: string;
  /**
   * The subtitle of the filter
   */
  subtitle?: string;

  /**
   * The label of the ui elements
   */
  label?: string;
  /**
   * The Filter Type
   */
  type: FilterType;

  /**
   * The Filter's Options if the filter type is SELECT,MULTISELECT,EXCLUDABLE_SELECT
   */
  options?: Option[];
};

export type ExcludableMultiSelectProp = {
  included: string[];
  excluded: string[];
};

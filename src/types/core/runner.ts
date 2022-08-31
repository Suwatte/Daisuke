import { ReadingFlag } from "../content";

export type RunnerInfo = {
  readonly id: string;
  readonly name: string;
  readonly version: number;
  readonly authors?: string[];
  readonly minSupportedAppVersion?: string;
};

export enum RunnerType {
  CONTENT_SOURCE,
  SERVICE_INTERACTOR,
}

export type SourceInfo = RunnerInfo & {
  readonly website: string;
  readonly supportedLanguages: string[];
  readonly hasExplorePage: boolean;
  readonly VXI?: string; // For Later Use, Commenting
  readonly primarilyAdultContent: boolean;
  readonly authMethod?: AuthMethod;
  readonly contentSync?: boolean;
  readonly thumbnail?: string;
};

export enum AuthMethod {
  USERNAME_PW,
  EMAIL_PW,
  WEB,
  OAUTH,
}

export type User = {
  readonly id: string;
  readonly username: string;
  readonly avatar?: string;
  readonly info?: Record<string, string>;
};

export enum PreferenceType {
  select,
  multiSelect,
  stepper,
  toggle,
  textfield,
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
export interface Preference {
  // Core
  key: string;
  label: string;
  type: PreferenceType;
  defaultValue: string;

  // Selections
  options?: SelectOption[];

  // TODO:
  // Stepper
  // minValue, maxValue

  // Multiselect
  // minSelectionCount, maxSelectionCount
}

export interface SyncedContent {
  id: string;
  title: string;
  covers: string[];
  readingFlag: ReadingFlag;
}

import { AuthMethod } from "./Authentication";

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
  readonly hasExplorePage?: boolean;
  readonly primarilyAdultContent?: boolean;
  readonly thumbnail?: string;
  readonly VXI?: string;
  readonly authMethod?: AuthMethod;
  readonly contentSync?: boolean;
};

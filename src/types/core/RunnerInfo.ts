export type RunnerInfo = {
  readonly id: string;
  readonly name: string;
  readonly version: number;
  readonly authors?: string[];
  readonly minSupportedAppVersion?: string;
};

export type SourceInfo = RunnerInfo & {
  readonly website: string;
  readonly supportedLanguages: string[];
  readonly nsfw: boolean;
  readonly thumbnail?: string;
};

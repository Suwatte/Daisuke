export type RunnerInfo = {
  /**
   * The ID of this runner. It should be unique.
   *
   * Runners with the same ID will be treated as the same.
   */
  readonly id: string;

  /**
   * The Name of this Runner, Typically the name of the Source
   */
  readonly name: string;

  /**
   * The Version of the Runner
   */
  readonly version: number;

  /**
   * The Name of the authors.
   */
  readonly authors?: string[];

  /**
   * This Minimum App Version This Runner Supports.
   */
  readonly minSupportedAppVersion?: string;
};

export type SourceInfo = RunnerInfo & {
  /**
   * The Websites URL
   */
  readonly website: string;
  /**
   * List of languages codes this source has chapters in.
   */
  readonly supportedLanguages: string[];

  /**
   * This should be set to true if a majority of the sources content are NSFW.
   */
  readonly nsfw: boolean;

  /**
   * The filename of the sources cover image within the assets folder.
   *
   * You may also use urls pointing to an image here.
   *
   * Example with source named JollyComics
   * * With jc.png file within the assets folder will have `thumbnail` set to `jc.png`
   * * Alternatively if JollyComics has an icon image at `https://jollycomics.com/thumbnail.png`, you can set `thumbnail` to the specified URL.
   */
  readonly thumbnail?: string;
};

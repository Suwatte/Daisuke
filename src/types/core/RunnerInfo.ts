export enum CatalogRating {
  /**
   * Catalog does not contain ANY SUGGESTIVE OR NSFW content
   */
  SAFE,

  /**
   * Catalog may contain SUGGESTIVE OR NSFW content,
   * runners must hide NSFW content by default,
   * users will be required to verify they are of age to view NSFW content
   */
  MIXED,

  /**
   * Catalog contains MAINLY SUGGESTIVE OR NSFW content,
   * users will be required to verify they are of age to view NSFW content
   */
  NSFW,
}

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
   * The general content rating of titles on this runner
   */
  readonly rating: CatalogRating;

  /**
   * This Minimum App Version This Runner Supports.
   */
  readonly minSupportedAppVersion?: string;

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

  /**
   * The Websites URL
   */
  readonly website?: string;
  /**
   * List of languages codes this source has chapters in ISO-631 Format
   */
  readonly supportedLanguages?: string[];
};

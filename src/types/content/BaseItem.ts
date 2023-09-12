export type BaseItem = {
  /**
   * Title of content
   */
  title: string;
  /**
   * Base Cover/Thumbnail for content
   */
  cover: string;

  /**
   * Additional Covers Provided
   */
  additionalCovers?: string[];

  /**
   * Additional Info that may be displayed with this content
   */
  info?: string[];

  /**
   * Indicates that this title contains NSFW content
   */
  isNSFW?: boolean;

  /**
   * The URL of this title on the web
   */
  webUrl?: string;
};

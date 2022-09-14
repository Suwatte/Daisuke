export type BaseInfo = {
  /**
   * Identifier for readable content on source
   */
  contentId: string;

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
   * Stats Object for Populating INFO style tiles
   */
  stats?: {
    views?: number;
    rating?: number;
    follows?: number;
  };

  /**
   * Updates Object for populating LATEST style tiles
   */
  updates?: {
    label: string;
    date?: Date;
    count?: Number;
  };
};

export type Highlight = BaseInfo & {
  subtitle?: string;
  tags?: string[];
  info?: Record<string, string>;
};

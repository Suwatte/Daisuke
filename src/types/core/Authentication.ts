import { ReadingFlag } from "../content/Enums";

export enum AuthMethod {
  USERNAME_PW,
  EMAIL_PW,
  WEB,
  OAUTH,
}

// Schemas

export type User = {
  /**
   * The users handle
   */
  handle: string;

  /**
   * The Users's Display Name
   */
  displayName?: string;
  /**
   * The users Avatar / Profile Picture
   */
  avatar?: string;

  /**
   * The banner image of the profile
   */
  bannerImage?: string;

  /**
   * Additional Information about the user to be displayed
   */
  info?: string[];
};

export type UpSyncedContent = {
  /**
   * The ID of the Title to be synced
   */
  id: string;
  /**
   * The Reading/Library flag of the title to be synced
   */
  flag: ReadingFlag;
};

export type DownSyncedContent = {
  /**
   * The ID of the content
   */
  id: string;
  /**
   * The Title of the content
   */
  title: string;
  /**
   * The Cover/Thumbnail URL of the Title Synced
   */
  cover: string;
  /**
   * The Reading Flag of the title synced
   */
  readingFlag?: ReadingFlag;
};

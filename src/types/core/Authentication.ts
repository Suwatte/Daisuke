import { z } from "zod";
import { ReadingFlag } from "..";

export enum AuthMethod {
  USERNAME_PW,
  EMAIL_PW,
  WEB,
  OAUTH,
}

// Schemas
export const ZUser = z.object({
  /**
   * The Users ID
   */
  id: z.string().min(1),
  /**
   * The users username
   */
  username: z.string().min(1),
  /**
   * The users Avatar / Profile Picture
   */
  avatar: z.string().url().optional(),

  /**
   * Additional Information about the user to be displayed
   */
  info: z.array(z.string()),
});

export const ZUpSyncedContent = z.object({
  /**
   * The ID of the Title to be synced
   */
  id: z.string().min(1),
  /**
   * The Reading/Library flag of the title to be synced
   */
  flag: z.nativeEnum(ReadingFlag),
});

export const ZDownSyncedContent = z.object({
  /**
   * The ID of the content
   */
  id: z.string().min(1),
  /**
   * The Title of the content
   */
  title: z.string().min(1),
  /**
   * The Cover/Thumbnail URL of the Title Synced
   */
  cover: z.string().url(),
  /**
   * The Reading Flag of the title synced
   */
  readingFlag: z.nativeEnum(ReadingFlag).optional(),
});

// Types
export interface User extends z.infer<typeof ZUser> {}
export interface UpSyncedContent extends z.infer<typeof ZUpSyncedContent> {}
export interface DownSyncedContent extends z.infer<typeof ZDownSyncedContent> {}

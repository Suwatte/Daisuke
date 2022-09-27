import { ReadingFlag } from "..";

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
  readonly info?: string[];
};

export interface UpSyncedContent {
  id: string;
  flag: ReadingFlag;
}

export interface DownSyncedContent {
  id: string;
  title: string;
  cover: string;
  readingFlag?: ReadingFlag;
}

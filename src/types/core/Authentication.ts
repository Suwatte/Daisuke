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
  readonly info?: Record<string, string>;
};

export interface SyncedContent {
  id: string;
  title: string;
  covers: string[];
  readingFlag: ReadingFlag;
}

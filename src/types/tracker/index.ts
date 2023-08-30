export enum TrackStatus {
  READING = "READING",
  PLANNING = "PLANNING",
  COMPLETED = "COMPLETED",
  PAUSED = "PAUSED",
  DROPPED = "DROPPED",
  REREADING = "REREADING",
}

export type TrackProgress = {
  lastReadChapter: number;
  maxAvailableChapter?: number;
  lastReadVolume?: number;
};

export type TrackProgressUpdate = {
  chapter?: number;
  volume?: number;
};

export type TrackEntry = {
  status: TrackStatus;
  progress: TrackProgress;
};

export type TrackItem = {
  id: string;
  title: string;
  cover: string;
  webUrl: string;
  entry?: TrackEntry;
  info?: string[];
};

import { Property, PublicationStatus } from "../content";

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
  isNSFW?: boolean;
};

export type FullTrackItem = TrackItem & {
  summary?: string;
  properties?: Property[];
  bannerCover?: string;
  isFavorite?: boolean;
  relatedTitles?: TrackItem[];
  recommendedTitles?: TrackItem[];
  links?: { label: string; url: string }[];
  characters?: {
    name: string;
    role?: string;
    image?: string;
    summary?: string;
  }[];
  additionalTitles?: string[];
  status?: PublicationStatus;
};

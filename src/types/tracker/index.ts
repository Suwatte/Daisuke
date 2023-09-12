import { Highlight, Property } from "../content";
import { PublicationStatus } from "../content/Enums";

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

export type FullTrackItem = Highlight & {
  summary?: string;
  properties?: Property[];
  bannerCover?: string;
  isFavorite?: boolean;
  relatedTitles?: Highlight[];
  recommendedTitles?: Highlight[];
  links?: { title: string; url: string }[];
  characters?: {
    name: string;
    role?: string;
    image?: string;
    summary?: string;
  }[];
  additionalTitles?: string[];
  status?: PublicationStatus;
};

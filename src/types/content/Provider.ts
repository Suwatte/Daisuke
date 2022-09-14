export type Provider = {
  id: string;
  name: string;
  links?: ProviderLink[];
};

export type ProviderLink = {
  url: string;
  type: ProviderLinkType;
};

export enum ProviderLinkType {
  WEBSITE,
  TWITTER,
  DISCORD,
  PATREON,
}

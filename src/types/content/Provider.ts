export enum ProviderLinkType {
  WEBSITE,
  TWITTER,
  DISCORD,
  PATREON,
}

export type ProviderLink = {
  /**
   * The URL of the Link
   */
  url: string;
  /**
   * The Type of Link.
   *
   * EG: The Providers Website, Twitter, Discord or Patreon
   */
  type: ProviderLinkType;
};

export type Provider = {
  /**
   * The ID of the Provider in relation to the Source
   */
  id: string;
  /**
   * The Name of the Provider
   */
  name: string;
  /**
   * Links the Provider can be interacted with at.
   */
  links?: ProviderLink[];
};

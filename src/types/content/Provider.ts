import { z } from "zod";

export enum ProviderLinkType {
  WEBSITE,
  TWITTER,
  DISCORD,
  PATREON,
}
export const ZProviderLink = z.object({
  /**
   * The URL of the Link
   */
  url: z.string().url(),
  /**
   * The Type of Link.
   *
   * EG: The Providers Website, Twitter, Discord or Patreon
   */
  type: z.nativeEnum(ProviderLinkType),
});

export const ZProvider = z.object({
  /**
   * The ID of the Provider in relation to the Source
   */
  id: z.string().min(1),
  /**
   * The Name of the Provider
   */
  name: z.string().min(1),
  /**
   * Links the Provider can be interacted with at.
   */
  links: z.array(ZProviderLink).optional(),
});

export interface Provider extends z.infer<typeof ZProvider> {}
export interface ProviderLink extends z.infer<typeof ZProviderLink> {}

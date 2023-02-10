import { z } from "zod";
import { ZUIGroup } from "../core/Preferences";

// Schemas
export const ZAction = z.object({
  /**
   * The Unique Key of this Action
   */
  key: z.string().min(1),
  /**
   * The name/title of this action
   */
  title: z.string().min(1),

  /**
   * the Subtitle to be displayed with this action
   */
  subtitle: z.string().optional(),

  /**
   * The {@link https://developer.apple.com/sf-symbols/ SF Symbol} key to be displayed with this action
   */
  systemImage: z.string().optional(),

  /**
   * Destructive actions are actions which delete/remove data.
   *
   * This should be set to true if the action does an irreplaceable action. e.g a full reset of preferences
   */
  isDestructive: z.boolean().optional(),
});

export const ZActionGroup = ZUIGroup.extend({
  /**
   * The Child Actions Within this Group
   */
  children: z.array(ZAction),
});

// Types
export interface Action extends z.infer<typeof ZAction> {}
export interface ActionGroup extends z.infer<typeof ZActionGroup> {}

import { Highlight } from "../../../types";

export interface ContextMenuHandler {
  /**
   * If Implemented suwatte will call this method to refetch the updated state of a highlight after an action is performed
   */
  getHighlight?(highlight: Highlight): Promise<Highlight>;
  getContextActions(highlight: Highlight): Promise<ContextMenuGroup[]>;
  didTriggerContextAction(
    highlight: Highlight,
    actionID: string
  ): Promise<void>;
}

export type ContextMenuAction = {
  id: string;
  title: string;
  systemImage?: string;
  destructive?: boolean;
  /**
   * If enabled the action will be displayed basically as a grayed out text label
   */
  displayAsPlainLabel?: boolean;
};

export type ContextMenuGroup = {
  id: string;
  actions: ContextMenuAction[];
};

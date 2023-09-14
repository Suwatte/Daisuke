import { ContextMenuGroup, Highlight } from "../../../types";

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

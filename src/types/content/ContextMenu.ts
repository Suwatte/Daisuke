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

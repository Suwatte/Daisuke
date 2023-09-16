export type GroupedUpdateItem = {
  contentId: string;
  updateCount: number;
};

export type GroupedUpdateResponse = {
  updates: GroupedUpdateItem[];
};

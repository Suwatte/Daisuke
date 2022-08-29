export type Property = {
  id: string;
  label: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
  adultContent: boolean;
  imageUrl?: string;
};

export type SearchSort = {
  label: string;
  id: string;
};
export type Filter = {
  canExclude: boolean;
  property: Property;
  id: string;
};

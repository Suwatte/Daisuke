export type Highlight = {
  id: string;
  title: string;
  covers: string[];
  subtitle?: string[];
  tags?: string[];

  stats?: any;

  chapter?: {
    id: string;
    label: string;
    date?: Date;
    badge: number;
  };
};

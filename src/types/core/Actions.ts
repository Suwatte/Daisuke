import { UIGroup } from ".";

export type Action = {
  key: string;
  title: string;
  subtitle?: string;
  systemImage?: string;
  isDestructive?: boolean;
};

export type ActionGroup = UIGroup & {
  children: Action[];
};

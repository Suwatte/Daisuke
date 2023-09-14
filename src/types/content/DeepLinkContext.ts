import { Linkable } from "../page";
import { Highlight } from "./Highlight";
import { ReaderContext } from "./ReaderContext";

export type DeepLinkContext = {
  read?: ReaderContext;
  content?: Highlight;
  link?: Linkable;
};

import { BooleanState } from "../../../types";
export type CGRect = {
  size: {
    width: number;
    height: number;
  };
  origin: {
    x: number;
    y: number;
  };
};

export type CGSize = {
  width: number;
  height: number;
};

export type RedrawInstruction = {
  source: CGRect;
  destination: CGRect;
};

export type RedrawWithSizeCommand = {
  size: CGSize;
  commands: RedrawInstruction[];
};

export interface ImageRedrawHandler {
  shouldRedrawImage(url: string): Promise<BooleanState>;
  redrawImageWithSize(size: CGSize): Promise<RedrawWithSizeCommand>;
}

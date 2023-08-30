import { ContentSource } from "../../ContentSource";
import { NetworkRequest } from "../../../types";

export interface ImageRequestHandler {
  /**
   * Called to override the default get request for fetching images.
   * @param imageURL The URL of the image being requested
   */
  willRequestImage(imageURL: string): Promise<NetworkRequest>;
}

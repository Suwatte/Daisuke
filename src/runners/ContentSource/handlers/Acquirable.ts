import { NetworkRequest } from "../../../types";

export interface Acquirable {
  /**
   * If an acquisition link is provided, suwatte will call this method to override the default Request sent to download the title
   * @param url
   */
  overrideDownloadRequest(url: string): Promise<NetworkRequest>;
}

import { DirectoryRequest, PagedResult, DirectoryConfig } from "../../../types";

export interface DirectoryHandler {
  /**
   * Fetches items/results for a directory request.
   */
  getDirectory(request: DirectoryRequest): Promise<PagedResult>;

  /**
   * Fetches the required directory config for a request
   *
   * Suwatte will cache the response for each Configuration Key upon first resolution as the Configuration is not intended to be dynamic.
   * @param configID The Configuration key defined by the pre-provided {@link DirectoryRequest}. Will be undefined or null to use the default configuration
   */
  getDirectoryConfig(configID?: string): Promise<DirectoryConfig>;
}

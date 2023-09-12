import { DirectoryRequest, PagedResult, DirectoryConfig } from "../../../types";

export interface DirectoryHandler<T> {
  /**
   * Fetches items/results for a directory request.
   */
  getDirectory(request: DirectoryRequest): Promise<PagedResult<T>>;

  /**
   * Fetches the required directory config for a request
   *
   * Suwatte will cache the response for each Configuration Key upon first resolution as the Configuration is not intended to be dynamic.
   * @param key The Configuration key defined by the pre-provided {@link DirectoryRequest}. Will be undefined or null to use the default configuration
   */
  getDirectoryConfig(key?: string): Promise<DirectoryConfig>;
}

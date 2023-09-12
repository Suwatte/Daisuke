export * from "./runners";
export * from "./types";

/**
 * Methods that exist on the StoreHandler Class
 */
declare class STTStore {
  /**
   * retrieves a value from the store
   * @param k The key of the KV Pair
   */
  get(k: string): Promise<unknown | null>;
  /**
   * sets a value to the store
   * @param k The Key of the Pair
   * @param v The Value of the pair
   */
  set(k: string, v: any): Promise<void>;
  remove(k: string): Promise<void>;

  // Helpers
  /**
   * @param k The key of the KV Pair
   * @returns null if the value is not stored but will throw an error if the corresponding value is not a string
   */
  string(k: string): Promise<string | null>;
  /**
   * @param k The key of the KV Pair
   * @returns null if the value is not stored but will throw an error if the corresponding value is not a boolean
   */
  boolean(k: string): Promise<boolean | null>;
  /**
   * @param k The key of the KV Pair
   * @returns null if the value is not stored but will throw an error if the corresponding value is not a number
   */
  number(k: string): Promise<number | null>;
  /**
   * @param k The key of the KV Pair
   * @returns null if the value is not stored but will throw an error if the corresponding value is not an array in which each element is a string
   */
  stringArray(k: string): Promise<string[] | null>;
}

/**
 * Globally Available Stores.
 * Multiple Instances can be created for either class as they all post to the same message handler BTS
 */
declare global {
  /**
   * Stores Key-Value pairs as a JSON String in the iOS KeyChain
   */
  const SecureStore: STTStore;

  /**
   * Stores Key-Value pairs as a JSON String in the local database
   */
  const ObjectStore: STTStore;
}

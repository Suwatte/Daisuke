export * from "./runner";
export * from "./source";

declare global {
  class ValueStore {
    get(k: string): Promise<string | null>;
    set(k: string, v: string): Promise<void>;
  }

  class KeyChainStore {
    get(k: string): Promise<string | null>;
    set(k: string, v: string): Promise<void>;
    remove(k: string): Promise<void>;
  }
}

export interface Instantiable {
  getInstanceName(): string;
  getInstanceID(): string;
}

export interface RequiresSetup {
  getSetupMenu(): Promise<any>;
  validateSetupValues(values: any): Promise<boolean>;
}

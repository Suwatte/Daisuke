export interface Instantiable {
  getSetupMenu(): Promise<any>;
  validateSetupValues(values: any): Promise<boolean>;
}

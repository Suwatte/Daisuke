export enum PreferenceType {
  SELECT,
  MULTISELECT,
  STEPPER,
  TOGGLE,
  TEXTFIELD,
  BUTTON,
}

type PreferenceValue<T> = {
  get: () => Promise<T>;
  set: (value: T) => Promise<void>;
};
abstract class Preference<T> {
  readonly key: string;
  readonly type: PreferenceType;
  readonly label: string;
  readonly value: PreferenceValue<T>;

  constructor(
    key: string,
    type: PreferenceType,
    label: string,
    value: PreferenceValue<T>
  ) {
    this.key = key;
    this.type = type;
    this.label = label;
    this.value = value;
  }
}
// Select
type PrefProps = {
  key: string;
  label: string;
};

type SelectOption = {
  label: string;
  value: string;
};

type SelectPreferenceOptions = PrefProps & {
  options: SelectOption[];
  value: PreferenceValue<string>;
};

export class SelectPreference extends Preference<string> {
  readonly options: SelectOption[];
  constructor({ key, label, options, value }: SelectPreferenceOptions) {
    super(key, PreferenceType.SELECT, label, value);
    this.options = options;
  }
}

// MultiSelect
type MultiSelectOptions = PrefProps & {
  options: SelectOption[];
  value: PreferenceValue<string[]>;
  minSelectionCount?: number;
  maxSelectionCount?: number;
};

export class MultiSelectPreference extends Preference<string[]> {
  readonly options: SelectOption[];
  readonly minSelectionCount?: number;
  readonly maxSelectionCount?: number;
  constructor({
    key,
    label,
    options,
    value,
    maxSelectionCount,
    minSelectionCount,
  }: MultiSelectOptions) {
    super(key, PreferenceType.MULTISELECT, label, value);
    this.options = options;
    this.maxSelectionCount = maxSelectionCount;
    this.minSelectionCount = minSelectionCount;
  }
}

// Stepper
type StepperPreferenceOptions = PrefProps & {
  minValue?: number;
  maxValue?: number;
  value: PreferenceValue<number>;
};

export class StepperPreference extends Preference<number> {
  readonly minValue?: number;
  readonly maxValue?: number;

  constructor({
    key,
    value,
    label,
    minValue,
    maxValue,
  }: StepperPreferenceOptions) {
    super(key, PreferenceType.STEPPER, label, value);
    this.maxValue = maxValue;
    this.minValue = minValue;
  }
}

// Toggle
type TogglePreferenceOption = PrefProps & {
  value: PreferenceValue<boolean>;
};
export class TogglePreference extends Preference<boolean> {
  constructor({ key, label, value }: TogglePreferenceOption) {
    super(key, PreferenceType.TOGGLE, label, value);
  }
}

// Textfield
type TextFieldPreferenceOption = PrefProps & {
  value: PreferenceValue<string>;
};

export class TextFieldPreference extends Preference<string> {
  constructor({ key, label, value }: TextFieldPreferenceOption) {
    super(key, PreferenceType.TEXTFIELD, label, value);
  }
}

// Button
type ButtonPreferenceOption = PrefProps & {
  action: () => Promise<void>;
  systemImage?: string;
  isDestructive?: boolean;
};

export class ButtonPreference extends Preference<never> {
  readonly action: () => Promise<void>;
  readonly systemImage?: string;
  readonly isDestructive?: boolean;
  constructor({
    key,
    label,
    action,
    systemImage,
    isDestructive,
  }: ButtonPreferenceOption) {
    super(key, PreferenceType.BUTTON, label, {
      get: function (): Promise<never> {
        throw new Error("Method Is Never Called!, Implement `action` instead");
      },
      set: function (value: never): Promise<void> {
        throw new Error("Method Is Never Called!, Implement `action` instead");
      },
    });
    this.action = action;
    this.systemImage = systemImage;
    this.isDestructive = isDestructive;
  }
}

type AnyPreferenceClass =
  | SelectPreference
  | MultiSelectPreference
  | TogglePreference
  | TextFieldPreference
  | StepperPreference
  | ButtonPreference;

export type PreferenceGroup = {
  id: string;
  header?: string;
  footer?: string;
  children: AnyPreferenceClass[];
};

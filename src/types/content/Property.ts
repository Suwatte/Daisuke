export type BaseInteractable = {
  /**
   * The ID of the Interactable Object
   */
  id: string;
  /**
   * The Label of the Interactable Object
   */
  label: string;
};

export type Property = BaseInteractable & {
  /**
   * The List of Tags available under this property.
   */
  tags: Tag[];
};

export type Tag = BaseInteractable & {
  /**
   * A boolean indicating the titles marked with this tag contain Adult Content
   */
  nsfw?: boolean;

  /**
   * The URL of an image to display with this tag
   */
  image?: string;

  noninteractive?: boolean;
};

/**
 * These help with schema validation checks in tests
 */

import { z } from "zod";
import {
  ZChapter,
  ZChapterData,
  ZChapterPage,
  ZCollectionExcerpt,
  ZContent,
  ZDownSyncedContent,
  ZFilter,
  ZHighlight,
  ZHighlightCollection,
  ZPagedResult,
  ZProperty,
} from "../types";

type Base = Record<string, any>;

const object = {
  content: (object: Base) => {
    ZContent.parse(object);
    return true;
  },
  chapter: (object: Base) => {
    ZChapter.parse(object);
    return true;
  },
  pagedResult: (object: Base) => {
    ZPagedResult.parse(object);
    return true;
  },
  chapterData: (object: Base) => {
    ZChapterData.parse(object);
    return true;
  },
  chapterPage: (object: Base) => {
    ZChapterPage.parse(object);
    return true;
  },

  collectionExcerpt: (object: Base) => {
    ZCollectionExcerpt.parse(object);
    return true;
  },
  highlight: (object: Base) => {
    ZHighlight.parse(object);
    return true;
  },
  highlightCollection: (object: Base) => {
    ZHighlightCollection.parse(object);
    return true;
  },
  property: (object: Base) => {
    ZProperty.parse(object);
    return true;
  },
  filter: (object: Base) => {
    ZFilter.parse(object);
    return true;
  },
  downSyncedContent: (object: Base) => {
    ZDownSyncedContent.parse(object);
    return true;
  },
};
const array = {
  content: (object: Base[]) => {
    z.array(ZContent).parse(object);
    return true;
  },
  chapter: (object: Base[]) => {
    z.array(ZChapter).parse(object);
    return true;
  },
  pagedResult: (object: Base[]) => {
    z.array(ZPagedResult).parse(object);
    return true;
  },
  chapterData: (object: Base[]) => {
    z.array(ZChapterData).parse(object);
    return true;
  },
  chapterPage: (object: Base[]) => {
    z.array(ZChapterPage).parse(object);
    return true;
  },

  collectionExcerpt: (object: Base[]) => {
    z.array(ZCollectionExcerpt).parse(object);
    return true;
  },
  highlight: (object: Base[]) => {
    z.array(ZHighlight).parse(object);
    return true;
  },
  highlightCollection: (object: Base[]) => {
    z.array(ZHighlightCollection).parse(object);
    return true;
  },
  property: (object: Base[]) => {
    z.array(ZProperty).parse(object);
    return true;
  },
  filter: (object: Base[]) => {
    z.array(ZFilter).parse(object);
    return true;
  },
  downSyncedContent: (object: Base[]) => {
    z.array(ZDownSyncedContent).parse(object);
    return true;
  },
};

export const Validate = {
  object,
  array,
};

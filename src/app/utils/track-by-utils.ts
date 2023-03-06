interface Item {
  id: number | string;
}

export const TRACK_BY_ID_FUNCTION = <T extends Item>(index: number, item: T) => {
  return item.id;
};

export function getFodaById(fodaObject, id) {
  if (!fodaObject) {
    return undefined;
  }

  return Object.values(fodaObject).find((item) => Number(item.id) === id);
}

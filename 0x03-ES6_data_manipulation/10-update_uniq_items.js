export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  const result = map.forEach((quantity, grocery) => {
    if (quantity === 1) {
      map.set(grocery, 100);
    }
  });
  return result;
}

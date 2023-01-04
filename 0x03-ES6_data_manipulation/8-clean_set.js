export default function cleanSet(set, startString) {
  let result = '';
  set.forEach((element) => {
    if (startString === '') {
      return result;
    } if (element.startsWith(startString)) {
      result = result.concat('-', element.slice(3));
    }
    return result;
  });
  return result.slice(1);
}

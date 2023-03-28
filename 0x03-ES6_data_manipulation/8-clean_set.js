export default function cleanSet(set, startString) {
  let str = '';
  set.forEach((value) => {
    if (value.slice(0, 3) === startString) {
      str += `${value.slice(3)}-`;
    }
  });
  return str.slice(0, -1);
}

export default function getListStudentIds(arg) {
  const result = Array.isArray(arg);
  if (result) {
    const newArr = arg.map((student) => student.id);
    return newArr;
  }
  return [];
}

export default function getListStudentIds(arrObjs) {
  const arrayIds = [];
  if (!Array.isArray(arrObjs)) return arrayIds;

  return arrObjs.map((obj) => obj.id);
}

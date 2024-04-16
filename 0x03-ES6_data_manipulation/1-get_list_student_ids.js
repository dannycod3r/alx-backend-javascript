export default function getListStudentIds(stdList) {
  if (Array.isArray(stdList)) {
    return stdList.map((stdList) => stdList.id);
  }
  return [];
}

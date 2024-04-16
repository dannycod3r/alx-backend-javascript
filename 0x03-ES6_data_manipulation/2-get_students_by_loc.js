export default function getStudentsByLocation(stdList, city) {
  if (Array.isArray(stdList)) {
    return stdList.filter((stdList) => stdList.location === city);
  }
  return [];
}

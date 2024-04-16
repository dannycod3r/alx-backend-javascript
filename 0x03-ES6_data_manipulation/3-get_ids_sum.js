export default function getStudentIdsSum(stdList) {
  if (Array.isArray(stdList)) {
    return stdList.map((stud) => stud.id)
      .reduce((prev, curr) => prev + curr, 0);
  }
  return 0;
}

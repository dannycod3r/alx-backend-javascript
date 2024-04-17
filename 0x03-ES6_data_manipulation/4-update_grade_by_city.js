export default function updateStudentGradeByCity(stdList, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
  const filteredStudents = stdList.filter((student) => student.location === city);

  return filteredStudents.map((student) => ({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
    grade: (newGrades
      .filter((grade) => grade.studentId === student.id)
      .pop() || defaultGrade).grade,
  }));
}

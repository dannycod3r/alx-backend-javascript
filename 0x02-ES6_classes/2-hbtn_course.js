export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name setter
  set name(newName) {
    if (typeof(newName) === 'string') {
      this._name = newName;
    } else {
        throw new TypeError('Name must be a string');
    }
  }

  // length setter
  set length(newLength) {
    if (typeof(newLength) === 'number') {
      this._length = newLength;
    } else {
        throw new TypeError('Length must be a string');
    }
  }

  // students setter
  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
        throw new TypeError('Students must be an Array');
    }
  }

  // name getter
  get name() { return this._name; }

  // length getter
  get length() { return this._length; }

  // students getter
  get students() { return this._students; }
}

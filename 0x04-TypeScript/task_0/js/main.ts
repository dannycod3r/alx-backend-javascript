interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

// function to render table
function renderTable(students: Student[]): void {
  // create table element
  const table = document.createElement('table');
  table.border = '1';

  // Create a header row
  const headerRow = table.insertRow();
  const headerCell1 = headerRow.insertCell();
  headerCell1.innerHTML = "<b>First Name</b>";
  const headerCell2 = headerRow.insertCell();
  headerCell2.innerHTML = "<b>Location</b>";


  students.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    cell1.textContent = student.firstName;
    const cell2 = row.insertCell();
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
}

renderTable(studentsList);
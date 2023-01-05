interface Student {
    firstName: string,
    lastName: string,
    age: number
    location: string
}

let student1: Student = {firstName: 'favour', lastName: 'Abangwu',age: 20, location: 'Abuja'}
let student2: Student = { firstName: 'loveth', lastName: 'Chibuzor',age: 23, location: 'Ekiti' }
const studentList : Student[] = [student1, student2]

const body: HTMLBodyElement = document.querySelector("body");
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLElement = document.createElement("thead");
const tbody: HTMLElement = document.createElement("tbody");


function generateRow(rowContainer: HTMLElement, data: string[]) {
    const row: HTMLTableRowElement = document.createElement("tr");
    rowContainer.appendChild(row);
    for (let i = 0; i < data.length; i++) {
        const cell: HTMLTableCellElement = document.createElement("td");
        cell.textContent = data[i];
        row.appendChild(cell);
    }
}

generateRow(thead, ["First Name", "Location"]);
for (let i = 0; i < studentList.length; i++) {
    generateRow(tbody, [studentList[i].firstName, studentList[i].location]);
}

table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);
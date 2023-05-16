interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'favour',
    lastName: 'Abangwu',
    age: 24,
    location: 'Abuja'
}

const student2: Student = {
    firstName: 'loveth',
    lastName: 'Abangwu',
    age: 21,
    location: 'Ibadan'
}

const studentsList: Student[] = [student1, student2]

const body = document.querySelector('body')
const table = document.createElement('table')
const tableHead = document.createElement('thead')
const headerRow = document.createElement('tr')
const headerCell1 = document.createElement('th')
headerCell1.textContent = 'firstName'
const headerCell2 = document.createElement('th')
headerCell2.textContent = 'location'

headerRow.appendChild(headerCell1)
headerRow.appendChild(headerCell2)

tableHead.appendChild(headerRow)


const tableBody = document.createElement('tbody')

const bodyRow = document.createElement('tr')
const cell1 = document.createElement('td')
cell1.textContent = student1.firstName
const cell2 = document.createElement('td')
cell2.textContent = student1.location

bodyRow.appendChild(cell1)
bodyRow.appendChild(cell2)
tableBody.appendChild(bodyRow)


const bodyRow2 = document.createElement('tr')
const cell1_2 = document.createElement('td')
cell1_2.textContent = student2.firstName
const cell2_2 = document.createElement('td')
cell2_2.textContent = student2.location

bodyRow2.appendChild(cell1_2)
bodyRow2.appendChild(cell2_2)
tableBody.appendChild(bodyRow2)



body.appendChild(table)
table.appendChild(tableHead)
table.appendChild(tableBody)
// interface Teacher {
//   readonly firstName: string;
//   readonly lastName: string;
//   fullTimeEmployee: boolean;
//   yearsOfExperience?: number;
//   location: string;
//   [index: string]: boolean | number | string;
// }

// const teacher3: Teacher = {
//   firstName: 'John',
//   fullTimeEmployee: false,
//   lastName: 'Doe',
//   location: 'London',
//   contract: false,
// };

// console.log(teacher3);


// interface Directors extends Teacher {
//   numberOfReports: number;
// }

// const director1: Directors = {
//   firstName: 'John',
//   lastName: 'Doe',
//   location: 'London',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };
// console.log(director1);

// interface PrintTeacherFunction {
//   (firstName: string, lastName: string): string;
// }
// // const printTeacher: PrintTeacherFunction;
// // 
// const printTeacher: PrintTeacherFunction = function(firstName, lastName) {
//   return `${firstName.slice(0,1)}. ${lastName}`
// }

// console.log(printTeacher("John", "Doe"))


interface ConstructorInterface {
  new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;


  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working'
  }

  displayName(): string {
    return this.firstName;
  }
}


// const student = new StudentClass('favoyr', 'aba');
// console.log(student)

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home'
  };
  getCoffeeBreak(): string {
    return 'Getting a coffee break'
  }
  workDirectorTasks(): string {
    return 'Getting to director task'
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home'
  };
  getCoffeeBreak(): string {
    return 'Cannot have a break'
  }
  workTeacherTasks(): string {
    return 'Getting to director task'
  }
}

// type EmployeeType = DirectorInterface | TeacherInterface

// function createEmployee(salary: number | string): EmployeeType {
//   if (typeof salary === 'number' && salary < 500) {
//     const teacher  = new Teacher()
//     return teacher
//   }
//   const director = new Director();

//   return director;
// }


function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


// function isDirector(employee): boolean {
//   if (typeof employee === Director) {
//     return true;
//   }
// }

// function executeWork(employee: DirectorInterface | TeacherInterface): void {
//   if (isDirector(employee)) {
//     employee.workDirectorTasks()
//   }
//   employee.workTeacherTasks()
// }

type Subjects = 'Math' | 'History'

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History'
 }
}

console.log(teachClass('Math'));

console.log(teachClass('History'));

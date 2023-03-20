// import createEmployeesObject from "./11-createEmployeesObject";

export default function createReportObject(employees) {
  const obj = {
    allEmployees: { ...employees },
    getNumberOfDepartments(allEmployees) {
      let count = 0;
      for (const employee in allEmployees) {
        count++;
      }
      return count;
    },
  };

  return obj;
}

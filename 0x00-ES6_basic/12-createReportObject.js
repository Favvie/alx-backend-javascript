// import createEmployeesObject from "./11-createEmployeesObject";

export default function createReportObject(employees) {
  const obj = {
    allEmployees: { ...employees },
    getNumberOfDepartments(allEmployees) {
      let count = 0;
      // eslint-disable-next-line
      for (const employee in allEmployees) {
        count += 1;
      }
      return count;
    },
  };

  return obj;
}

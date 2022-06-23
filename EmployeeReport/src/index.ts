/**
 * Local Import
 */
import { Employee } from './types';

/**
 *
 */
export const employeeReport = (employees: Employee[]) => {
  return employees
    .filter((employee) => {
      return employee.age >= 18;
    })
    .sort((employeeA, employeeB) =>
      employeeB.name.localeCompare(employeeA.name),
    )
    .map((employee) => ({
      ...employee,
      name: employee.name.toUpperCase(),
    }));
};

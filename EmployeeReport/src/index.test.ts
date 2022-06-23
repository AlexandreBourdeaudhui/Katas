/**
 * Local Import
 */
import { employeeReport } from "./index";
import { employees } from "./data";

/**
 * Tests
 */
describe('EmployeeReport', () => {
  it('returns more than zero employees', () => {
    expect(employeeReport(employees).length).toBeGreaterThan(0);
  });

  it('should return only employees with age >= 18', () => {
    const result = employeeReport(employees);
    result.forEach((employee) => {
      expect(employee.age).toBeGreaterThanOrEqual(18);
    });
  });

  it('should return employees sorted by their name descendent', () => {
    const result = employeeReport(employees);
    const sorted = result.sort((employeeA, employeeB) => {
      if (employeeA.name < employeeB.name) {
        return -1;
      }
      else if (employeeA.name > employeeB.name) {
        return 1;
      }
      return 0;
    });
    expect(result).toEqual(sorted);
  });

  it('should return employees whose name are capitalized', () => {
    const result = employeeReport(employees);
    result.forEach((employee) => {
      expect(employee.name).toEqual(employee.name.toUpperCase());
    });
  });

});
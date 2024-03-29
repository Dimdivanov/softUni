class Company {
  constructor() {
    this.department = {};
  }
  addEmployee(name, salary, position, department) {
    salary = Number(salary);
    if (!name || !salary || !position || !department) {
      throw Error('Invalid input!');
    } else if (Number(salary) < 0) {
      throw Error('Invalid input!');
    }
    if (!this.department[department]) {
      this.department[department] = {
        avg: 0,
        sumSalary: 0,
        employees: [],
      };
    }
    this.department[department].employees.push({ name, salary, position });
    this._calculateAverageDepartment(department, salary);
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }
  bestDepartment() {
    let bestDepArr = this._bestDepHelper();
    let buff = `Best Department is: ${bestDepArr[0]}\n`;
    buff += `Average salary: ${bestDepArr[1].avg.toFixed(2)}\n`;
    bestDepArr[1].employees
      .sort((emp1, emp2) => {
        return emp2.salary - emp1.salary || emp1.name.localeCompare(emp2.name);
      })
      .forEach(
        (emp) => (buff += `${emp.name} ${emp.salary} ${emp.position}\n`)
      );

    return buff.trim();
  }
  _bestDepHelper() {
    return Object.entries(this.department).sort(
      (a, b) => b[1].avg - a[1].avg
    )[0];
  }
  _calculateAverageDepartment(department, salary) {
    let curDepartment = this.department[department];
    curDepartment.sumSalary += salary;
    curDepartment.avg =
      curDepartment.sumSalary / curDepartment.employees.length;
  }
}
let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());

const employees = [
    {
        id: 1,
        name: "Jhon Doe",
        age: 30,
        department: "IT",
        salary: 50000,
    },
    {
        id: 2,
        name: "Alice Smith",
        age: 28,
        department: "HR",
        salary: 45000,
    },
    {
        id: 3,
        name: "Bob Johnson",
        age: 35,
        department: "Finance",
        salary: 60000,
    },
    {
        id: 4,
        name: "Carol White",
        age: 32,
        department: "Marketing",
        salary: 55000,
    },
    {
        id: 5,
        name: "David Brown",
        age: 38,
        department: "IT",
        salary: 70000,
    },
    {
        id: 6,
        name: "Emma Davis",
        age: 26,
        department: "HR",
        salary: 42000,
    },
];

const displayEmployeeElement = document.getElementById(
    "employeesDetails",
);

function displayEmployees() {
    const totalEmployees = employees
        .map(
            (employee) =>
                `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`,
        )
        .join("");

    displayEmployeeElement.innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce(
        (acc, employee) => acc + employee.salary,
        0,
    );

    alert(`Total Salary: ${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(
        (employee) => employee.department === "HR",
    );

    const hrEmployeesDisplay = hrEmployees
        .map(
            (hrEmployee) =>
                `<p>${hrEmployee.id}: ${hrEmployee.name} - ${hrEmployee.departement} - ${hrEmployee.salary}</p>`,
        )
        .join("");

    displayEmployeeElement.innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(id) {
    const foundEmployee = employees.find(
        (employee) => employee.id === id,
    );

    if (foundEmployee) {
        displayEmployeeElement.innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.salary}</p>`;
    } else {
        displayEmployeeElement.innerHTML = `Employee with id: ${id} not found!`;
    }
}

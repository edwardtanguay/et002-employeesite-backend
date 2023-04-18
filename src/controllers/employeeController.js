import fs from 'fs';

export const getEmployees = (req, res) => {
	const rawEmployees = fs.readFileSync('./src/data/employees.json', 'utf8');
	const employees = JSON.parse(rawEmployees);
	res.send(employees);
};

export const addEmployee = (req, res) => {
	const employee = { ...req.body.employee };
	const rawEmployees = fs.readFileSync('./src/data/employees.json', 'utf8');
	const employees = JSON.parse(rawEmployees);
	employees.push(employee);
	employee.id = 999;
	fs.writeFileSync('./src/data/employees.json', JSON.stringify(employees, null, 2));
	res.send({
		message: 'ok',
		employeeAdded: employee
	});
};

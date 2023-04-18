import fs from 'fs';

export const getEmployees = (req, res) => {
	const rawEmployees = fs.readFileSync('./src/data/employees.json', 'utf8');
	const employees = JSON.parse(rawEmployees);
	res.send(employees);
};

export const addEmployee = (req, res) => {
	const employee = { ...req.body.employee };
	employee.id = Math.floor(Math.random() * 1000);
	res.send({
		message: 'ok',
		employeeAdded: employee
	});
};

import fs from 'fs';
import express from 'express';

const app = express();
const port = 3333;

app.get('/', (req, res) => {
	res.send('EMPLOYEE API');
});

app.get('/employees', (req, res) => {
	const rawEmployees = fs.readFileSync('./src/data/employees.json', 'utf8');
	const employees = JSON.parse(rawEmployees);
	res.send(employees);
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});

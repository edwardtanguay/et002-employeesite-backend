import express from 'express';
import { getEmployees, addEmployee } from './controllers/employeeController.js';

const app = express();
app.use(express.json());
const port = 3333;

app.get('/', (req, res) => {
	res.send('COMPANY API');
});

app.get('/employees', getEmployees);
app.post('/employee', addEmployee);

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});

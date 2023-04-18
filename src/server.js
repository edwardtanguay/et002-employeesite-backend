import express from 'express';
import { getEmployees, addEmployee } from './controllers/employeeController.js';
import { sanitizeName, sanitizeAge } from './middleware/employeeSanitizers.js';

const app = express();
app.use(express.json());
const port = 3333;

app.get('/', (req, res) => {
	res.send('COMPANY API');
});

app.get('/employees', getEmployees);
app.post('/employee', sanitizeName, sanitizeAge, addEmployee);

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});

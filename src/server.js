import express from 'express';
import { getEmployees, addEmployee } from './controllers/employeeController.js';
import { sanitizeName, sanitizeAge } from './middleware/employeeSanitizers.js';
import { validateFirstName, validateLastName, validateAge } from './middleware/employeeValidators.js';

const app = express();
app.use(express.json());
const port = 3333;

app.get('/', (req, res) => {
	res.send('COMPANY API');
});

app.get('/employees', getEmployees);
app.post('/employee', sanitizeName, sanitizeAge, validateFirstName, validateLastName, validateAge, addEmployee);

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.send({
		error: {
			message: err.message
		}
	});
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});

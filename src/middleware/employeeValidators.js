export function validateFirstName(req, res, next) {
	const { firstName } = req.body.employee;

	if (firstName.trim() === '') {
		const error = new Error('first name is required');
		error.status = 400;
		next(error);
	}

	next();
}

export function validateLastName(req, res, next) {
	const { lastName } = req.body.employee;

	if (lastName.trim() === '') {
		const error = new Error('last name is required');
		error.status = 400;
		next(error);
	}

	next();
}

export function validateAge(req, res, next) {
	const { age } = req.body.employee;

	if (isNaN(age) || age <= 0 || age >= 120) {
		const error = new Error('age must be between 1 and 120');
		error.status = 400;
		next(error);
	}

	next();
}

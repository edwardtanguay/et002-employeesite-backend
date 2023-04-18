export function sanitizeName(req, res, next) {
	const { firstName, lastName } = req.body.employee;
	req.body.employee.firstName =
		firstName.charAt(0).toUpperCase() + firstName.slice(1);
	req.body.employee.lastName =
		lastName.charAt(0).toUpperCase() + lastName.slice(1);
	next();
}

export function sanitizeAge(req, res, next) {
	req.body.employee.age = Number(req.body.employee.age);
	next();
}

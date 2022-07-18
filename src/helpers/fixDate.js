const fixDate = (inputDate) => {
	const monthArr = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'June',
		'July',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec',
	];
	let outputDate;

	const day = inputDate.getDate();
	const month = monthArr[inputDate.getMonth()];
	const year = inputDate.getFullYear();

	outputDate = `${year} ${month} ${day}`;

	return outputDate;
};

export default fixDate;

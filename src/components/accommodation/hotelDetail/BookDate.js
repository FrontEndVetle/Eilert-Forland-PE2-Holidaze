import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookDate() {
	const [startDate, setStartDate] = useState(new Date('2021/01/01'));
	const [endDate, setEndDate] = useState(new Date('2021/01/01'));
	return (
		<>
			<DatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				selectsStart
				startDate={startDate}
				endDate={endDate}
			/>
			<DatePicker
				selected={endDate}
				onChange={(date) => setEndDate(date)}
				selectsEnd
				startDate={startDate}
				endDate={endDate}
				minDate={startDate}
			/>
		</>
	);
}

export default BookDate;

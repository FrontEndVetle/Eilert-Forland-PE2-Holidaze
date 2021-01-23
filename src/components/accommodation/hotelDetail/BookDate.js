import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Paper from '@material-ui/core/Paper';
import Button from 'react-bootstrap/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BookDate({
	startDate,
	setStartDate,
	endDate,
	setEndDate,
	handleSelect,
}) {
	return (
		<Paper elevation={2} className='mt-2'>
			<List>
				<h2 className='text-center'>Choose booking dates</h2>
				<ListItem>
					<DatePicker
						dateFormat='dd-MM-yyyy'
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						selectsStart
						startDate={startDate}
						endDate={endDate}
					/>
					<ArrowForwardIcon />
					<DatePicker
						dateFormat='dd-MM-yyyy'
						selected={endDate}
						onChange={(date) => setEndDate(date)}
						selectsEnd
						startDate={startDate}
						endDate={endDate}
						minDate={startDate}
					/>
				</ListItem>
				<Divider variant='middle' />

				<ListItem>
					<label>Select a state</label>
					<DropdownButton
						alignRight
						title='Dropdown right'
						id='dropdown-menu-align-right'
						onSelect={handleSelect}>
						<Dropdown.Item eventKey={1}>1</Dropdown.Item>
						<Dropdown.Item eventKey={2}>2</Dropdown.Item>
						<Dropdown.Item eventKey={3}>3</Dropdown.Item>
					</DropdownButton>
				</ListItem>
			</List>
		</Paper>
	);
}

export default BookDate;

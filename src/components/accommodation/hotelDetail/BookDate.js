import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

function BookDate({
	startDate,
	setStartDate,
	endDate,
	setEndDate,
	handleSelect,
	guestOptions,
	modalShow,
}) {
	return (
		<Paper elevation={2} className='mt-2'>
			<List>
				<h2 className='text-center'>Choose booking dates</h2>
				<Grid container spacing={1} justify='center'>
					<Grid item xs={12} sm={5}>
						<DatePicker
							dateFormat='yyyy-MM-dd'
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							selectsStart
							startDate={startDate}
							endDate={endDate}
						/>
					</Grid>
					<Grid item xs={12} sm={1}>
						<ArrowForwardIcon />
					</Grid>
					<Grid item xs={12} sm={5}>
						<DatePicker
							dateFormat='yyyy-MM-dd'
							selected={endDate}
							onChange={(date) => setEndDate(date)}
							selectsEnd
							startDate={startDate}
							endDate={endDate}
							minDate={startDate}
						/>
					</Grid>
				</Grid>

				<Divider variant='middle' />
				<ListItem>
					<Select native onChange={handleSelect}>
						{guestOptions}
					</Select>
					<Button className=' btn' onClick={modalShow}>
						Enquire about availability
					</Button>
				</ListItem>
			</List>
		</Paper>
	);
}

export default BookDate;

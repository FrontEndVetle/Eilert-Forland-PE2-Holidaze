import React, { useState, useEffect } from 'react';
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

function BookDate({ startDate, setStartDate, endDate, setEndDate }) {
	return (
		<Paper elevation={2} className='mt-2'>
			<List>
				<h2 className='text-center'>Choose booking dates</h2>
				<ListItem>
					<DatePicker
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						selectsStart
						startDate={startDate}
						endDate={endDate}
					/>
					<ArrowForwardIcon />
					<DatePicker
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
					<InputLabel>Guests</InputLabel>
					<Select value=''>
						<MenuItem value='1'>
							<em>None</em>
						</MenuItem>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
					</Select>
				</ListItem>
			</List>
		</Paper>
	);
}

export default BookDate;

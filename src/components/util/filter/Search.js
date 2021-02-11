import React from 'react';

import { NavLink } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Form from 'react-bootstrap/Form';
import { FaBed } from 'react-icons/fa';

import PropTypes from 'prop-types';

export default function Search({ searchName, hotels }) {
	console.log(hotels);
	return (
		<div>
			<Form className='search'>
				<Form.Group className='search' onChange={(event) => searchName(event)}>
					<Typeahead
						id='basic-typeahead-single'
						labelKey='name'
						options={hotels}
						placeholder='Search bt name...'
						renderMenuItemChildren={(option) => (
							<div>
								<NavLink className='search__link' to={'hotel/' + option.id}>
									<p>
										<FaBed /> ┃ {option.name} ┃ $ {option.price}
									</p>
									<hr className='search__hr' />
								</NavLink>
							</div>
						)}
					/>
				</Form.Group>
			</Form>
		</div>
	);
}
Search.propTypes = {
	searchName: PropTypes.func.isRequired,
};

import React from 'react';

import { NavLink } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Form from 'react-bootstrap/Form';
import { FaBed } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Search({ linkPath, searchName, hotels }) {
	return (
		<div>
			<Form className='search'>
				<Form.Group className='search' onChange={(event) => searchName(event)}>
					<Typeahead
						id='basic-typeahead-single'
						labelKey='name'
						options={hotels}
						placeholder='Search by name...'
						renderMenuItemChildren={(option) => (
							<div>
								<NavLink className='search__link' to={linkPath + option.id}>
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
	linkPath: PropTypes.string.isRequired,
	hotels: PropTypes.array.isRequired,
};

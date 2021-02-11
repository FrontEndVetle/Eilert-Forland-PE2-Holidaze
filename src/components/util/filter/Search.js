import React from 'react';

import { NavLink } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Form from 'react-bootstrap/Form';

import PropTypes from 'prop-types';

export default function Search({ searchName, hotels }) {
	console.log(hotels);
	return (
		<div>
			<Form>
				<Form.Group onChange={(event) => searchName(event)}>
					<Typeahead
						id='basic-typeahead-single'
						labelKey='name'
						options={hotels}
						placeholder='Choose a state...'
						renderMenuItemChildren={(option) => (
							<div>
								<p>
									<NavLink className='search-link' to={'hotel/' + option.id}>
										{option.name} ${option.price}
									</NavLink>
								</p>
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

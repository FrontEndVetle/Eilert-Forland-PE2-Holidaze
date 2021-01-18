import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default function Search({ searchName }) {
	return (
		<InputGroup>
			<FormControl
				placeholder='Search for hotel..'
				onChange={(event) => searchName(event)}
			/>
		</InputGroup>
	);
}

Search.propTypes = {
	handleSearch: PropTypes.func.isRequired,
};

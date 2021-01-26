import React from 'react';
import ContactForm from './ContactForm';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom';
import { BASE_URL, FETCH_OPTIONS } from '../../constants/api';

function Contact() {
	const history = useHistory();

	async function onSubmit(data) {
		console.log('data', data);
		let validated = document.querySelector('.validated');
		validated.style.display = 'block';

		const url = BASE_URL + 'contacts';

		FETCH_OPTIONS.method = 'POST';
		FETCH_OPTIONS.body = JSON.stringify(data);

		fetch(url, FETCH_OPTIONS)
			.then((r) => r.json())
			.then((j) => console.log(j));
	}

	return (
		<Container>
			<h1>Contact Page</h1>
			<ContactForm onSubmit={onSubmit} />
		</Container>
	);
}

export default Contact;

import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../../../constants/api';
import MessageList from './MessageList';
import moment from 'moment';
import { Container, Col, Row } from 'react-bootstrap/';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';
import { FaFileAlt } from 'react-icons/fa';
import InfoIcon from '../../ui/InfoIcon';
import Heading from '../../ui/Heading';

function MessagesContainer() {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);

	const url = BASE_URL + 'contacts';
	const deletePath = 'contacts/';
	const historyPath = '/admin';

	const options = { headers };

	useEffect(() => {
		fetch(url, options)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				// handle error
				if (json.error) {
					setMessages([]);
				} else {
					setMessages(json);
				}
			})
			.catch((error) => {
				console.log(error);
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
					footer: 'Please try and reload the page',
				});
			})
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner className='spinner' animation='border' variant='primary' />;
	}

	return (
		<Container>
			<Row className='content d-flex justify-content-center'>
				{messages &&
					messages
						.slice(0)
						.reverse()
						.map((contact, i) => {
							const { name, email, message, createdAt, id } = contact;

							let sentDate = moment(createdAt).format('YYYY-MM-DD');

							return (
								<MessageList
									key={i}
									name={name}
									email={email}
									createdAt={sentDate}
									id={id}
									deletePath={deletePath}
									historyPath={historyPath}
									messageContent={
										<InfoIcon
											small='Contact message'
											info={message}
											icon={<FaFileAlt />}
										/>
									}
								/>
							);
						})}
			</Row>
		</Container>
	);
}

export default MessagesContainer;

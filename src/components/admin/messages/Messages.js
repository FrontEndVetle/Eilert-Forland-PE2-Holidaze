import React from 'react';
import MetaTags from 'react-meta-tags';
import Container from 'react-bootstrap/Container';
import Heading from '../../ui/Heading';
import MessagesContainer from './MessagesContainer';

function Messages() {
	return (
		<>
			<MetaTags>
				<title>Messages Page</title>
				<meta
					name='description'
					content='This page contains the messages from the contact forms'
				/>
			</MetaTags>
			<Container fluid className='body-light p-0 '>
				<div className='content'>
					<Container>
						<Heading title='Contact messages' />
					</Container>
					<MessagesContainer />
				</div>
			</Container>
		</>
	);
}

export default Messages;

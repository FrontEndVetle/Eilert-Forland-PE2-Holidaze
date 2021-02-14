import React from 'react';
import MetaTags from 'react-meta-tags';
import Container from 'react-bootstrap/Container';
import Heading from '../../ui/Heading';
import EnquiriesContainer from './EnquiriesContainer';

function Enquiries() {
	return (
		<>
			<MetaTags>
				<title>Enquiries Page</title>
				<meta name='description' content='This is the Enquiries Page' />
			</MetaTags>
			<Container fluid className='body-light p-0 '>
				<div className='content'>
					<Container>
						<Heading title='Enquiries' />
					</Container>
					<EnquiriesContainer />
				</div>
			</Container>
		</>
	);
}

export default Enquiries;

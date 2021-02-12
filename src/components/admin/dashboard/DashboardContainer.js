import React from 'react';
import MenuCards from '../../ui/MenuCards';
import { Container, Row, Col } from 'react-bootstrap';
import CardBtn from '../../ui/CardBtn';
import Heading from '../../ui/Heading';

function Dashboard() {
	const adminOptions = [
		{
			id: 1,
			name: 'Accommodations',
			link: '/admin/hotels',
			img: './images/hotellist.jpg',
		},
		{
			id: 2,
			name: 'Add hotel',
			link: '/admin/hotels/add',
			img: './images/add.jpg',
		},
		{
			id: 3,
			name: 'Enquiries',
			link: '/admin/enquiries',
			img: './images/enquiry.jpg',
		},
		{
			id: 4,
			name: 'Contact forms',
			link: '/admin/messages',
			info: 'gtr',
			img: './images/contact.jpg',
		},
	];

	return (
		<Container>
			<div className='content'>
				<Heading title='Dashboard' />

				<Row className='content d-flex justify-content-center'>
					<Col lg={8}>
						<Row>
							{adminOptions.map((option) => {
								const { id, name, link, img } = option;

								return (
									<Col xs={12} sm={6} key={id}>
										<MenuCards
											title={name}
											link={link}
											img={img}
											btn={<CardBtn linkPath={link} btnText='Select' />}
										/>
									</Col>
								);
							})}
						</Row>
					</Col>
				</Row>
			</div>
		</Container>
	);
}

export default Dashboard;

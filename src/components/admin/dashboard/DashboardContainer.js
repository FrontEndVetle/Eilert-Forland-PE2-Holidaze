import React from 'react';
import DashBoardCards from './DashboardCards';
import { Container, Row, Col } from 'react-bootstrap';

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
			<Row className='content d-flex justify-content-center'>
				<Col lg={8}>
					<Row>
						{adminOptions.map((option) => {
							const { id, name, link, img } = option;

							return (
								<Col className='d-flex' xs={12} sm={6} key={id}>
									<DashBoardCards id={id} name={name} link={link} img={img} />
								</Col>
							);
						})}
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default Dashboard;

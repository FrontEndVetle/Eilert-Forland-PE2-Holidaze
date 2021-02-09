import React from 'react';
import DashBoardCards from './DashboardCards';
import { Container, Row } from 'react-bootstrap';

function Dashboard() {
	const adminOptions = [
		{ id: 1, name: 'Hotels', link: '/admin/hotels', info: 'gr' },
		{ id: 2, name: 'Add hotel', link: '/admin/hotels/add', info: 'gr' },
		{ id: 3, name: 'Enquiries', link: '/admin/enquiries', info: 't' },
		{ id: 4, name: 'Contact forms', link: '/admin/messages', info: 'gtr' },
	];

	return (
		<Container>
			<Row className='content d-flex justify-content-around'>
				{adminOptions.map((option) => {
					const { id, name, link, info } = option;

					return (
						<DashBoardCards
							key={id}
							id={id}
							name={name}
							link={link}
							info={info}
						/>
					);
				})}
			</Row>
		</Container>
	);
}

export default Dashboard;

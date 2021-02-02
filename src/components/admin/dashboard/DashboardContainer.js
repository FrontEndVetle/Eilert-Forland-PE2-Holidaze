import React from 'react';
import DashBoardCards from './DashboardCards';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function Dashboard() {
	const adminOptions = [
		{ id: 1, name: 'Hotels', link: '/admin/hotels', info: 'gr' },
		{ id: 2, name: 'Add hotel', link: '/admin/hotels/add', info: 'gr' },
		{ id: 3, name: 'Enquiries', link: '/admin/enquiries', info: 't' },
		{ id: 4, name: 'Contact forms', link: '/admin/messages', info: 'gtr' },
	];

	return (
		<Container>
			<Grid
				container
				direction='row'
				justify='center'
				alignItems='center'
				spacing={3}>
				{adminOptions.map((option) => {
					const { id, name, link, info } = option;

					return <DashBoardCards id={id} name={name} link={link} info={info} />;
				})}
			</Grid>
		</Container>
	);
}

export default Dashboard;

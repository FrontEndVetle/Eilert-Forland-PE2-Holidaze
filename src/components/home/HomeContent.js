import React from 'react';
/*import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';*/
import HomeData from '../../data/Homepage.json';

function HomeContent() {
	return (
		<div>
			{HomeData.map((HomeDetail, index) => {
				return (
					<div key={index}>
						<h1>{HomeDetail.title} </h1>
						<p>{HomeDetail.information} </p>
					</div>
				);
			})}
		</div>
	);
}

export default HomeContent;
/*<Col>
				<Card>
					<Card.Title>Hello</Card.Title>
				</Card>
			</Col>
		</Row>*/

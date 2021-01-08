import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { AuthContextProvider } from '../../context/AuthContext';
import ProtectedRoute from '../routes/ProtectedRoute';
import Home from '../home/Home';
import Contact from '../contact/Contact';
import Accommodation from '../accommodation/Accommodation';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Hotels from '../admin/Hotels';
import AddHotel from '../admin/AddHotel';
import EditHotel from '../admin/EditHotel';
import Dashboard from '../admin/Dashboard';
import NavBar from './Nav';

function App() {
	return (
		<AuthContextProvider>
			<Router>
				<NavBar />

				<Container>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/contact' exact component={Contact} />
						<Route path='/accommodation' exact component={Accommodation} />
						<Route path='/login' component={Login} />
						<Route path='/register' component={Register} />
						<ProtectedRoute path='/admin' exact component={Dashboard} />
						<ProtectedRoute path='/admin/hotels' exact component={Hotels} />
						<ProtectedRoute
							path='/admin/hotels/add'
							exact
							component={AddHotel}
						/>
						<ProtectedRoute
							path='/admin/hotels/edit/:id'
							exact
							component={EditHotel}
						/>
						<Redirect to='/' />
					</Switch>
				</Container>
			</Router>
		</AuthContextProvider>
	);
}

export default App;

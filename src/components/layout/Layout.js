import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { AuthContextProvider } from '../../context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from '../home/Home';
import Contact from '../contact/Contact';
import Accommodation from '../accommodation/Accommodation';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Hotels from '../admin/hotelEdit/Hotels';
import AddHotel from '../admin/hotelEdit/AddHotel';
import EditHotel from '../admin/hotelEdit/EditHotel';
import Dashboard from '../admin/dashboard/DashboardContainer';
import NavBar from './header/Nav';
import Footer from './footer/Footer';
import HotelDetail from '../accommodation/hotelDetail/HotelDetail';
import EnquiriesContainer from '../admin/messages/EnquiriesContainer';
import Messages from '../admin/messages/MessagesContainer';

function App() {
    return ( <
        AuthContextProvider >
        <
        Router >
        <
        NavBar / >
        <
        Switch >
        <
        Route path = '/'
        exact component = { Home }
        />{' '} <
        Route path = '/contact'
        exact component = { Contact }
        />{' '} <
        Route path = '/accommodation'
        exact component = { Accommodation }
        />{' '} <
        Route path = '/login'
        component = { Login }
        />{' '} <
        Route path = '/register'
        component = { Register }
        />{' '} <
        Route path = '/hotel/:id'
        component = { HotelDetail }
        />{' '} <
        ProtectedRoute path = '/admin'
        exact component = { Dashboard }
        />{' '} <
        ProtectedRoute path = '/admin/hotels'
        exact component = { Hotels }
        />{' '} <
        ProtectedRoute path = '/admin/hotels/add'
        exact component = { AddHotel }
        />{' '} <
        ProtectedRoute path = '/admin/enquiries'
        exact component = { EnquiriesContainer }
        />{' '} <
        ProtectedRoute path = '/admin/messages'
        exact component = { Messages }
        />{' '} <
        ProtectedRoute path = '/admin/hotels/edit/:id'
        exact component = { EditHotel }
        />{' '} <
        Redirect to = '/' / >
        <
        /Switch>{' '} <
        Footer / >
        <
        /Router>{' '} <
        /AuthContextProvider>
    );
}

export default App;
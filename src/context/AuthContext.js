import React, { createContext, useState } from 'react';

const AuthContext = createContext();

//check if user or admin is logged in
const AuthContextProvider = ({ children }) => {
	const existingUser = JSON.parse(localStorage.getItem('user')) || null;
	const existingAdmin = localStorage.getItem('admin') || null;

	//change state of logged in
	const [admin, setAdmin] = useState(existingAdmin);
	const [user, setUser] = useState(existingUser);

	//register who is logged in
	function registerAdmin(username) {
		localStorage.setItem('admin', JSON.stringify(username));

		setAdmin(username);
	}

	function registerUser(username) {
		localStorage.setItem('user', JSON.stringify(username));

		setUser(username);
	}

	//remove user/admin from LS when logging out
	function logout() {
		setAdmin(null);
		setUser(null);
		localStorage.removeItem('user');
		localStorage.removeItem('admin');
	}

	return (
		<AuthContext.Provider
			value={{ admin, user, registerAdmin, registerUser, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthContextProvider };

import React from 'react';
import {useHistory} from 'react-router-dom';


export const Navigation = () => {
	const history = useHistory();

	const onLogInClicked = async () => {
		history.push("/login");
	}

	const onRegisterClicked = async () => {
		history.push("/register");
	}

	return(
		<nav className="flex justify-end pa2">
			<p onClick={onLogInClicked} className="f4 link underline pointer pa2">Login</p>
			<p onClick={onRegisterClicked} className="f4 link underline pointer pa2">Register</p>
		</nav>
	)
}
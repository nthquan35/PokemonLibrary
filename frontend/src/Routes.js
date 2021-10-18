import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MainPage} from './pages/MainPage';
import {AddNewPokemonPage} from './pages/AddNewPokemonPage';
import {SignUpPage} from './pages/SignUpPage';
import {LogInPage} from './pages/LogInPage';

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<MainPage />
				</Route>
				<Route path="/add" >
					<AddNewPokemonPage />
				</Route>
				<Route path="/login">
					<LogInPage/>
				</Route>
				<Route path="/register">
					<SignUpPage/>
				</Route>
			</Switch>
		</Router>

	);
}
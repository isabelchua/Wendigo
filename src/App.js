import React, { useState } from "react";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
	//const [user, setUser] = useState(null);
	const [{ user }, dispatch] = useStateValue();
	console.log(user);

	return (
		<div className="App">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<div className="app__body">
							<Sidebar />
							<Switch>
								<Route path="/rooms/:roomId">
									<Chat />
								</Route>
								<Route path="/">
									<h1>welcome</h1>
								</Route>
							</Switch>
						</div>
					</>
				)}

				{/* react router chat screen */}
			</Router>
		</div>
	);
}

export default App;

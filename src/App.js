import React from "react";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
	//const [user, setUser] = useState(null);
	const [{ user }] = useStateValue();

	//M.toast({ html: `logged in as ${user}` });

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
									<Redirect to="/rooms/A7MrmQLombvkfaKy3lyj">
										<Chat />
									</Redirect>
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

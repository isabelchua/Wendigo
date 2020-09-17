import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
// import { useStateValue } from "./StateProvider";
// import { actionTypes } from "./reducer";

function Login() {
	const [, dispatch] = useStateValue();

	const signIn = e => {
		auth
			.signInWithPopup(provider)
			.then(result => {
				console.log(result);
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user
				});
			})
			.catch(error => {
				alert(error.message);
			});
	};

	return (
		<div id="login" className="login">
			<div className="login__container modal-content">
				<img src="https://i.imgur.com/l6soTSl.png" alt="" />
				<h1>Wendigo Chat</h1>
				<p>Make channels! Interact with people!</p>
				<Button onClick={signIn}>Sign in with Google</Button>
			</div>
		</div>
	);
}

export default Login;

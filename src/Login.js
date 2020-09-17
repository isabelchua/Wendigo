import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider, providerFB } from "./firebase";
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

	const signInFB = e => {
		auth
			.signInWithPopup(providerFB)
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
			<div className="login__container">
				<img src="https://i.imgur.com/l6soTSl.png" alt="" />
				<h1>Wendigo Chat</h1>
				<p>Make channels! Interact with people!</p>
				<div className="button-wrap">
					<Button className="google" onClick={signIn}>
						<i className="fi-cnsuxl-google-logo align-c line"></i>Sign in
						with Google
					</Button>

					<Button className="fb" onClick={signInFB}>
						<i className="fi-cnsuxl-facebook-circle align-c line"></i>Sign
						in with Facebook
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Login;

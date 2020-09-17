import { Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import "./ChatInput.css";

function ChatInput({ channelName, channelId }) {
	const [input, setInput] = useState("");
	const [{ user }] = useStateValue();

	const sendMessage = e => {
		e.preventDefault();

		if (channelId) {
			db.collection("rooms").doc(channelId).collection("messages").add({
				message: input,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				user: user.displayName,
				userImage: user.photoURL
			});
		}
		setInput("");
	};

	return (
		<div className="chatInput">
			<form action="">
				<input
					value={input}
					onChange={e => setInput(e.target.value)}
					placeholder={`Message # ${channelName?.toLowerCase()}`}
					type="text"
				/>
				<Button type="submit" onClick={sendMessage}>
					SEND
				</Button>
			</form>
		</div>
	);
}

export default ChatInput;

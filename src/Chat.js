import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";

import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./firebase";

import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
	const { roomId } = useParams();
	const [roomDetails, setRoomDetails] = useState(null);
	const [roomMessages, setRoomMessages] = useState([]);

	// if (roomId === null) {
	// 	console.log(object);
	// }

	useEffect(() => {
		if (roomId) {
			db.collection("rooms")
				.doc(roomId)
				.onSnapshot(snapshot => setRoomDetails(snapshot.data()));
		}
		db.collection("rooms")
			.doc(roomId)
			.collection("messages")
			.orderBy("timestamp", "asc")
			.onSnapshot(snapshot =>
				setRoomMessages(snapshot.docs.map(doc => doc.data()))
			);
	}, [roomId]);

	// console.log(roomDetails);
	// console.log("messages", roomMessages);

	return (
		<div className="chat">
			<div className="chat__header">
				<div className="chat__headerLeft">
					<h4 className="chat__channelName">
						{/* <b>{roomId}</b> */}
						<strong>#{roomDetails?.name}</strong>
					</h4>
				</div>
				<div className="chat__headerRight">
					<p>
						<InfoOutlinedIcon /> Details
					</p>
				</div>
			</div>

			<div className="chat__messages">
				{roomMessages.map(({ message, timestamp, userImage, user }) => (
					<Message
						message={message}
						timestamp={timestamp}
						userImage={userImage}
						user={user}
					/>
				))}
			</div>
			{roomDetails ? console.log(roomDetails) : null}
			<ChatInput channelName={roomDetails?.name} channelId={roomId} />
		</div>
	);
}

export default Chat;

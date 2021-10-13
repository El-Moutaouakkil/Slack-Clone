import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from "react-redux";
import { selectChannelId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import {
    collection,
    query,
    where,
    getDocs,
    orderBy,
    doc,
    getDoc,
    onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";

function Chat() {
    const [channelName, setChannelName] = useState("");
    const [channelMessages, setChannelMessages] = useState([]);
    const channelId = useSelector(selectChannelId);
    const chatBottomRef = useRef(null);
    // let channelDetails = {};
    const getChannelDetails = async () => {
        if (channelId) {
            const docRef = doc(db, "channels", channelId);
            const docSnapshot = await getDoc(docRef);

            if (docSnapshot.exists()) {
                // channelDetails = docSnapshot.data();
                // console.log("channelDetails  ::", channelDetails);
                setChannelName(docSnapshot.data().name);
            } else {
                console.log("No such document!");
            }
        }
    };

    const getChannelMessages = async () => {
        if (channelId) {
            const messagesCollectionRef = collection(
                db,
                "channels",
                channelId,
                "messages"
            );
            const q = query(messagesCollectionRef, orderBy("timestamp", "asc"));
            const querySnapshot = await getDocs(q);
            const messages = [];
            querySnapshot.forEach((doc) =>
                messages.push({
                    id: doc.id,
                    user: doc.data().user,
                    message: doc.data().message,
                    timestamp: doc.data().timestamp,
                })
            );
            setChannelMessages(messages);
        }
    };

    // getChannelMessages();

    useEffect(() => {
        const unsubscribe = getChannelDetails();
        return unsubscribe;
    }, [channelId]);

    useEffect(() => {
        const unsubscribe = getChannelMessages();
        console.log(
            "calling from useEffect :::: channelMessages --> ",
            channelMessages
        );
        return unsubscribe;
    }, [channelId]);

    useEffect(() => {
        const getMessages = async () => {
            const q = query(
                collection(db, "channels", channelId, "messages"),
                orderBy("timestamp")
            );
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const messages = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    message: doc.data().message,
                    user: doc.data().user,
                    timestamp: doc.data().timestamp,
                }));
                // console.log(messages);
                setChannelMessages([...messages]);
                chatBottomRef?.current?.scrollIntoView({
                    behavior: "smooth",
                });
            });
            console.log(channelMessages);
            return unsubscribe;
        };
        if (channelId) {
            getMessages();
        }
    }, [channelId]);

    return (
        <ChatContainer>
            {channelId && channelMessages && (
                <>
                    <Header>
                        <div className='header-left'>
                            <h4>
                                <strong>
                                    #{channelName ? channelName : "General"}
                                </strong>
                            </h4>
                            <StarBorderOutlinedIcon fontSize='small' />
                        </div>
                        <div className='header-right'>
                            <InfoOutlinedIcon sx={{ fontSize: "1.2em" }} />{" "}
                            <span>Details</span>
                        </div>
                    </Header>
                    <ChatMessages>
                        {channelMessages?.map((doc) => {
                            const { message, user, timestamp } = doc;
                            return (
                                <Message
                                    key={doc.id}
                                    message={message}
                                    user={user}
                                    timestamp={timestamp}
                                />
                            );
                        })}
                        <ChatBottom ref={chatBottomRef} />
                    </ChatMessages>
                    <ChatInput
                        // channelName
                        channelId={channelId}
                        channelName={channelName}
                        chatBottomRef={chatBottomRef}
                    />
                </>
            )}
        </ChatContainer>
    );
}

export default Chat;

const ChatBottom = styled.div`
    padding-bottom: 50px;
`;

const ChatContainer = styled.div`
    color: #111;
    flex: 0.8;
    margin-top: 3em;
    overflow-y: scroll;
    /* margin-bottom : 3em; */
`;

const Header = styled.div`
    background-color: white;
    position: fixed;
    /* background-color:orange; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    padding: 1em 1em;
    border-bottom: 1px solid lightgray;

    > * {
        display: flex;
        align-items: center;
        > * {
            margin-inline: 0.1em;
        }
    }
    > .header-left {
        h4 {
            text-transform: lowercase;
        }
    }
    > .header-right {
        position: fixed;
        right: 2em;
    }
`;
const ChatMessages = styled.div`
    font-size: 1em;
    padding-top: 6em;
`;

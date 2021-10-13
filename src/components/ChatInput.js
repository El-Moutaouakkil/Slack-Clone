import Button from "@mui/material/Button";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useRef } from "react";
import styled from "styled-components";
import { db } from "../firebase";

function ChatInput({ channelId, channelName, chatBottomRef }) {
    console.log("channel id => ", channelId);
    console.log("channel name => ", channelName);
    const inputRef = useRef(null);

    const sendMessage = async (e) => {
        e.preventDefault(); //Prevent refresh
        if (!channelId) {
            return false;
        }
        const messagesCollectionRef = collection(
            db,
            "channels",
            channelId,
            "messages"
        );
        try {
            const docRef = await addDoc(messagesCollectionRef, {
                message: inputRef.current.value,
                user: "E.M Mohammed",
                timestamp: serverTimestamp(),
            });
            inputRef.current.value = null;
            chatBottomRef?.current?.scrollIntoView({
                behavior: "smooth",
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        /* ========= test firestore */
    };

    return (
        <ChatInputContainer>
            <form>
                <input
                    ref={inputRef}
                    type='text'
                    placeholder={`Message #${
                        channelName ? channelName : "general"
                    }`}
                />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;
// export messages;
const ChatInputContainer = styled.div`
    form {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;

        input {
            width: 55%;
            position: fixed;
            bottom: 2em;
            border: 1px solid gray;
            border-radius: 0.2em;
            outline: none;
            padding: 0.9em;
        }
        .MuiButton-root {
            display: none;
        }
    }
`;

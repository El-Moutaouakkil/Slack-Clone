import Button from "@mui/material/Button";
import {
    addDoc,
    collection,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
} from "firebase/firestore";
import React, { useRef } from "react";
import styled from "styled-components";
import { db } from "../firebase";

function ChatInput({ channelId, channelName }) {
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
            /*  */
            const docSnap = await getDocs(messagesCollectionRef);

            const q = query(messagesCollectionRef);
            const querySnapshot = await getDocs(q);
            const messages = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                message: doc.data(),
            }));
            console.log(messages);

            /*  */
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
                    placeholder={`Message #Room`}
                />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;
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

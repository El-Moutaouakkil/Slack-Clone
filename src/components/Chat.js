import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from "react-redux";
import { selectChannelId } from "../features/appSlice";
import ChatInput from "./ChatInput";

function Chat() {
	const channelId = useSelector(selectChannelId);
	
    return (
        <ChatContainer>
            <Header>
                <div className='header-left'>
                    <h4>
                        <strong>#Channel-name</strong>
                    </h4>
                    <StarBorderOutlinedIcon fontSize='small' />
                </div>
                <div className='header-right'>
                    <InfoOutlinedIcon sx={{ fontSize: "1.2em" }} />{" "}
                    <span>Details</span>
                </div>
            </Header>
			<ChatMessages> {/* List ou messages*/}

			</ChatMessages>
			<ChatInput 
				// channelName
				channelId = {channelId}
			/>
        </ChatContainer>
    );
}

export default Chat;
const Dar = styled.div``;


const ChatContainer = styled.div`
    color: #111;
    flex: 0.8;
    margin-top: 3em;
    overflow-y: scroll;
`;

const Header = styled.div`
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
    }
`;
const ChatMessages = styled.div`

`;

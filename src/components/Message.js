import { Avatar } from "@mui/material";
import { Blue, purple } from "@mui/material/colors";

import React from "react";
import styled from "styled-components";
const Message = ({ message, user, timestamp }) => {
    return (
        <MessageContainer>
            <Avatar sx={{ bgcolor: purple[300] }} variant='rounded'>
                {user.substring(0, 1) + "." + user.substring(user.length - 1)}
            </Avatar>
            <UserInfo>
                <h5>
                    {user}
                    <span className='date'>
                        <small> {timestamp?.toDate().toUTCString()}</small>
                    </span>
                </h5>
                <p className='message'>{message}</p>
            </UserInfo>
			
        </MessageContainer>
    );
};

export default Message;

const MessageContainer = styled.div`
    display: flex;
    /* align-items: center; */

    > .MuiAvatar-root {
        margin: 0em 0.5em 0.5em 0.6em;
    }
    span {
        line-height: 1;
        font-weight: normal;
        margin-inline: 1em;
        padding: 0.1em 0.4em;
        font-style: italic;
    }
	position: relative;
	z-index: -1000;
`;

const UserInfo = styled.div`
    display: block;

    p {
		font-size: 0.9em;

    }
`;

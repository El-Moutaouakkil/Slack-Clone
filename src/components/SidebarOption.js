import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterChannel } from "../features/appSlice";
import addChannel from "../utilities/channelManager";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
    const dispatch = useDispatch();
    const [color, setColor] = useState(false);
    const selectChannel = (e) => {
        // e.target.style.background = "#9932CC";

        if (id) {
            dispatch(
                enterChannel({
                    channelId: id,
                })
            );
        }
    };

    return (
        <SidebarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon ? (
                <>
                    <Icon fontSize='small' /> <h5>{title}</h5>{" "}
                </>
            ) : (
                <SidebarOptionChannel>
                    <span style={{ marginLeft: "0.4em" }}>#</span>
                    <h5>{title}</h5>
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    );
};
export default SidebarOption;

const SidebarOptionContainer = styled.div`
    display: flex;
    padding: 0.6em 1em;
    cursor: pointer;
    > h5 {
        margin-left: 1.2em;
        font-weight: 500;
    }
    > span ~ h5 {
        margin-left: 1.5em;
    }
    transition: all 0.2s ease-out;
    :hover {
        background-color: #370638;
        opacity: 0.9;
    }

    :last-child {
        margin-bottom: 2em;
    }
`;
const SidebarOptionChannel = styled.div`
    padding: 0;
    display: flex;
    justify-content: space-around;
    justify-content: space-between;
    span {
        /* font-weight: bold; */
    }
    > h5 {
        margin-left: 1.5em;
        font-weight: 500;
    }
`;

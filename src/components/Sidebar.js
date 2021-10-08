import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment"; // import InboxIcon from "@mui/icons-material/Inbox";
import InboxIcon from "@mui/icons-material/Inbox"; // import InboxIcon from "@mui/icons-material/Inbox";

import SidebarOption from "./SidebarOption";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { db } from "../firebase";
import { getChannels } from "../utilities/channelManager";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Sidebar = () => {
    //    const [isNewChannel, setIsNewChannel] = useState(false);
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const chs = [];
            const querySnapshot = await getDocs(collection(db, "channels"));
            querySnapshot.forEach((doc) => {
                chs.push({ id: doc.id, name: doc.data().name });
            });
            console.log(chs);
            setChannels([...chs]);
        };
        getData();
    }, []);
    return (
        <SidebarContainer>
            <hr className='hr' />
            <SidebarHeader>
                <SidebarInfo>
                    <h2>project-test workspace</h2>
                    <h3>
                        <FiberManualRecordIcon
                            sx={{
                                fontSize: ".9em",
                                marginRight: "0.5em",
                                color: "lightgreen",
                            }}
                        />
                        E.M Mohammed
                    </h3>
                </SidebarInfo>
                <CreateIcon fontSize='small' />
            </SidebarHeader>
            <hr />
            <SidebarOption Icon={InsertCommentIcon} title='Threads' />
            <SidebarOption Icon={InboxIcon} title='Mentions & reactions' />
            <SidebarOption Icon={DraftsIcon} title='Saved items' />
            <SidebarOption Icon={BookmarkBorderIcon} title='Channel browsers' />
            <SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
            <SidebarOption Icon={AppsIcon} title='Apps' />
            <SidebarOption Icon={FileCopyIcon} title='File browser' />
            <SidebarOption Icon={ExpandLessIcon} title='Show less' />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
            <hr />
            <SidebarOption
                // onClick={addChannel}           
                Icon={AddIcon}
                title='Add Channel'
                addChannelOption
            />

            <ul>
                {channels?.map((channel) => (
                    <SidebarOption key={channel.id} title={channel.name} />
                ))}
            </ul>
        </SidebarContainer>
    );
};

export default Sidebar;

const SidebarContainer = styled.div`
    flex: 0.37;
    max-width: 270px;
    color: white;
    background-color: var(--slack-color);
    /* position: fixed; */
    height: 100%;
    margin-top: 3em;
    overflow-y: scroll;
    > * {
        padding: 0.4em 1em;
    }
    > hr {
        margin: 0.6em 0;
        padding: 0;
        border: 1px solid #49274b;
    }
    /* Scrollbar style  */
    ::-webkit-scrollbar {
        width: 2vw;
    }

    ::-webkit-scrollbar-track {
        box-sizing: content-box;
        box-shadow: inset 0 0 10px 10px var(--slack-color);
    }

    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 10px 10px gray;
        border: solid 4px transparent;
        border-radius: 50px;
    }
    /* Scrollbar style END */
`;
const SidebarHeader = styled.div`
    margin: 0.4em 0;
    padding: 0.5em 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    > .MuiSvgIcon-root {
        color: var(--slack-color);
        background-color: white;
        width: 1.7em;
        height: 1.7em;
        padding: 0.4em;
        border-radius: 50%;
    }

    > * {
        margin: 0 0.5em;
    }
`;
const SidebarInfo = styled.div`
    > h2 {
        font-size: 0.9em;
        margin-bottom: 0.3em;
    }
    > h3 {
        font-size: 0.7em;
        font-weight: 400;
        display: flex;
        align-items: center;
    }
`;

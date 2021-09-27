import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment"; // import InboxIcon from "@mui/icons-material/Inbox";
import InboxIcon from "@mui/icons-material/Inbox"; // import InboxIcon from "@mui/icons-material/Inbox";

import SidebarOption from "./SidebarOptionContainer";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const Sidebar = () => {
    return (
        <SidebarContainer>
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
            <SidebarOption Icon={InsertCommentIcon} title='Threads' />
            <SidebarOption Icon={InboxIcon} title='Mentions & reactions' />
            <SidebarOption Icon={DraftsIcon} title='Saved items' />
            <SidebarOption Icon={BookmarkBorderIcon} title='Channel browsers' />
            <SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
            <SidebarOption Icon={AppsIcon} title='Apps' />
            <SidebarOption Icon={FileCopyIcon} title='File browser' />
            <SidebarOption Icon={ExpandLessIcon} title='Show less' />
        </SidebarContainer>
    );
};

export default Sidebar;

const SidebarContainer = styled.div`
    flex : 0.37;
    max-width : 270px;
    color: white;
    background-color: var(--slack-color);
    /* position: fixed; */
    height: 100%;
    /* padding: 0 1em; */
     margin-top: 3em;
    > * {
        padding: 0.4em 1em;
    } 
`;
const SidebarHeader = styled.div`
    border-top: 1px solid violet;
    border-bottom: 1px solid violet;
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

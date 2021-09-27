import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderLeft>
                    <HeaderAvatar
                    //Todo add onClick
                    />

                    <AccessTimeIcon className='timeIcon' />
                </HeaderLeft>

                {/* Header search */}

                <HeaderSearch>
                    <input type='text' placeholder='search...' />
                    <SearchIcon className='search' />
                </HeaderSearch>

                {/* Header right  */}

                <HeaderRight>
                    <HelpOutlineIcon className='helpIcon' />
                </HeaderRight>
            </HeaderContainer>
        </>
    );
};

export default Header;

const HeaderContainer = styled.div`
    background-color: var(--slack-color);
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
    position: fixed;
    padding : 0.3em 0;
`;

// left part of the header
const HeaderLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;

    flex: 1;
    opacity: 0.9;

    > .MuiAvatar-root {
        transform: scale(0.8);
    }
    > .timeIcon {
        width: 20px;
    }
`;
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;

// middle part of the header
const HeaderSearch = styled.div`
    display: flex;
    align-items: center;
    background-color: '#421f44';
    flex: 3;
    position: relative;
    > input {
        font-weight: 600;
        color: rgba(0, 0, 0, 0.8);
        letter-spacing: 0.03em;
        width: 100%;
        max-width: 700px;
        padding: 0.2em 1em;
        border: 1px solid white;
        outline: none;
        border-radius: 4px;
        
        /* opacity: 0.3; */
        ::placeholder {
            color: darkviolet;
            font-style: italic;
            /* opacity : 1 */
        }
    }
    > .search {
        color : #111;
        width: 17px;
        position: absolute;
        right: 0.5em;
        top: 0.4em;
    }
`;

// right part of the headers
const HeaderRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 2em;
    opacity: 0.9;
    > .helpIcon {
        width: 20px;
    }
`;

import React from "react";
import styled from "styled-components";

const SidebarOption = ({ Icon, title }) => {
    return (
        <SidebarOptionContainer>
            <>
                {<Icon fontSize='small' />}
                <h5>{title}</h5>
            </>
        </SidebarOptionContainer>
    );
};
export default SidebarOption;

const SidebarOptionContainer = styled.div`
    display: flex;
    /* justify-content: space-between; */
    /* margin: 0.7em 0.3em; */
	/* padding : 0.5em 0em; */
    /* margin-left: 0.5em; */
	padding : .7em 1em;
    cursor: pointer;
    > h5 {
        margin-left: 1.2em;
        font-weight: 500;
    }
	transition : all .2s ease-out;
    :hover {
        background-color: #370638;
        opacity: 0.8;
    }
	
`;

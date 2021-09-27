import React from "react";
import styled from "styled-components";

const SidebarOption = ({ Icon, title, addChannelOption}) => {
   
   const addChannel = () => {
       
   }
   const selectChannel = () => {
       
   };
   
   
    return (
        
        <SidebarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
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
    /* justify-content: space-between; */
    /* margin: 0.7em 0.3em; */
    /* padding : 0.5em 0em; */
    /* margin-left: 0.5em; */
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
`;
const SidebarOptionChannel = styled.div`
    display: flex;
    justify-content: space-between;
    span {
        font-weight: bold;
    }
    > h5 {
        margin-left: 1.5em;
        font-weight: 500;
    }
`;

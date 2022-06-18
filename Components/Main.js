import React from "react";
import Portofolio from "./Portfolio";
import styled from "styled-components";
import Promos from "./Promo";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Main = ({thirdWebTokens, sanityTokens, walletAddress}) => {
    const [action, setAction] = useState("0");

    const selectedOption = (option) => {
        console.log(setAction)
        switch (option) {  
            case "0":
                return ( 
                    <Wrapper>
                    <Sidebar setAction = {setAction}/>
                    <Portofolio  
                    walletAddress = {walletAddress} 
                    sanityTokens = {sanityTokens} 
                    thirdWebTokens = {thirdWebTokens} />
                    <Promos/>
                </Wrapper> )
            case "2":
            return(
                <Wrapper>
                    <Sidebar setAction = {setAction}/>
                    <div>HELLO</div>
                </Wrapper>
            )
            default:
                return ( 
                <Wrapper>
                    <Sidebar/>
                    <Portofolio  
                    walletAddress = {walletAddress} 
                    sanityTokens = {sanityTokens} 
                    thirdWebTokens = {thirdWebTokens} />
                    <Promos/>
                </Wrapper>)
        }}
    return (
        selectedOption(action)
    )
}

export default Main

const Wrapper = styled.div`
    display: flex;
    max-height: calc(100vh - 164px);
    overflow: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display:none;
    }

    & div {
        border-radius: 0.4rem;
    }
`
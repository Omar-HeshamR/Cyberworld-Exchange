import React from "react";
import styled from "styled-components";
import { useState } from "react";
import CoinSelector from "./CoinSelecter";
import { css } from "@emotion/react";
import { HashLoader} from "react-spinners";
import Sell from "./Sell"
import { FaCheck } from "react-icons/fa";
import { App } from "./congrats";

const TransferModal = ({ sanityTokens, thirdWebTokens, walletAddress }) => {
    const [action, setAction] = useState("send");
    const [selectedToken, setSelectedToken] = useState(sanityTokens[14]);
    // FOR CIRCLE LOADER
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#FFA500");

    const selectedModal = (option) => {
        switch (option) {
            case 'sell':
                return <Sell 
                selectedToken = {selectedToken}
                setAction = {setAction}
                thirdWebTokens ={thirdWebTokens}
                walletAddress = {walletAddress}
                />
                
            case 'select':
                return <CoinSelector 
                selectedToken = {selectedToken}
                setAction = {setAction}
                setSelectedToken={setSelectedToken}
                thirdWebTokens ={thirdWebTokens}
                walletAddress = {walletAddress}
                sanityTokens = {sanityTokens}
                />
                
            case 'selling':
              return <div>
                <h2 
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: 'orange',
                    fontSize: "1.9rem",
                  }}          
                >Selling in Progress... </h2>
                <HashLoader color={color} size = '240' loading={loading} css={override} />
              </div>
            case 'Sold':
              return <div>
                <h2  
                style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2.6rem",
                fontWeight: "600",
                color: "#27ad75",
              }}           
              >Selling Completed ! </h2>
              <App />
              </div> 
          
            default:
                return <Sell 
                selectedToken = {selectedToken}
                setAction = {setAction}
                thirdWebTokens ={thirdWebTokens}
                walletAddress = {walletAddress}
                />
        }
    }

    return (
        <Wrapper>
          <Header>
            <Option
              onClick={() => setAction("sell")}
            >
              <p>Sell Cryptocurrency</p>
            </Option>
          </Header>
          <ModalMain>{selectedModal(action)}</ModalMain>
        </Wrapper>
      );
}

export default TransferModal


const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  border-radius: 30px;
  color: white;
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar{
      display:none;
  }
  border: 8px groove #66cad8;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
  place-items: center;
  font-size: 2.2rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


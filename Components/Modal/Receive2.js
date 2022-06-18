import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaWallet } from "react-icons/fa";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";
import Receive from "./Receive";

const Receive2 = ({selectedToken, setAction, thirdWebTokens, walletAddress}) => {
    const [amount, setAmount] = useState();
    const [recepient, setRecepient] = useState("");
    const [imageUrl, setImageUrl] = useState(null);
    const [activeThirdWebToken, setActiveThirdWebToken] = useState();
    const [balance, setBalance] = useState("Fetching...");
    const tokenHolder = "0x4aD32B102cEacAd896Ff7d87DE7aE89b9a3c778D"
    useEffect(() =>{
      setRecepient(walletAddress);
    })

    useEffect(() => {
        const activeToken = thirdWebTokens.find(
          (token) => token.address === selectedToken.contractAddress
        );
        setActiveThirdWebToken(activeToken);
      }, [thirdWebTokens, selectedToken]);

    useEffect(() => {
        const url = imageUrlBuilder(client).image(selectedToken.logo).url();
        setImageUrl(url);
      }, [selectedToken]);

    useEffect(() => {
        const getBalance = async () => {
          const balance = await activeThirdWebToken.balanceOf(walletAddress);
          setBalance(balance.displayValue);
        };
    
        if (activeThirdWebToken) {
          getBalance();
        }
      }, [activeThirdWebToken]);

    return (
        <Wrapper>
            <TransferForm>
                <Divider />
                <Row>
                    <FieldName>Pick Coin to Receive </FieldName>
                    <CoinSelectList onClick={ () => setAction('select')}>
                        <Icon>
                            <img src = {imageUrl} />
                        </Icon>
                        <CoinName>{selectedToken.name}</CoinName>
                    </CoinSelectList>
                </Row>
            </TransferForm>
            <Row>
                <Continue onClick={() => setAction("receive")}>Continue</Continue>
            </Row>
                <BalanceTitle>{selectedToken.symbol} Balance</BalanceTitle>
                <Balance>{balance} {selectedToken.symbol}</Balance>
        </Wrapper>
    )
}


export default Receive2;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

const Amount = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FlexInputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  & > span {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: #FFA500;
  }
`;

const FlexInput = styled.input`
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  text-align: right;
  max-width: 45%;
  margin-right: 1rem;
  font-size: 4.5rem;
  color: #FFA500;
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Warning = styled.div`
  padding: 1rem 0 2rem 0;
  text-align: center;
  color: ${(p) => (p.amount ? `#0a0b0d;` : "#8a919e;")};
`;

const TransferForm = styled.div`
  border: 1px solid #282b2f;
  border-radius: 0.4rem;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8a919e;
  padding: 2rem 0;
  font-size: 1.2rem;
`;

const FieldName = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-left: 1rem;
`;

const Icon = styled.div`
  margin-right: 1rem;
  justify-content: center;
  text-align: center;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Recipient = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`;

const CoinSelectList = styled.div`
  display: flex;
  flex: 1.3;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;
const CoinName = styled.div`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.34rem;
  text-wrap: wrap;
  margin-right: 0.5rem;
`;

const Continue = styled.button`
  color: white;
  width: 100%;
  background-color: #FFA500;
  padding: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    background-color: #ff8c00;
  }
`;

const BalanceTitle = styled.div`
flex: 1;
border: none;
background: none;
outline: none;
justify-content: center;
text-align: center;
color: white;
font-size: 3rem;
text-wrap: wrap;
margin-top: 3rem;
`;

const Balance = styled.div`
flex: 10;
border: none;
background: none;
outline: none;
justify-content: center;
text-align: center;
color: white;
font-size: 1.4rem;
text-wrap: wrap;
margin-right: 0.5rem;
margin-top: 0rem;
`;
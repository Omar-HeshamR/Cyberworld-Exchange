import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import SendModal from "./modal/SendModal";
import BuyModal from "./modal/BuyModal"
import Link from "next/link";
import { useRouter } from "next/router";
Modal.setAppElement("#__next");
import Image from "next/image";
import CoinbaseLogo from "c:/Users/Omar2/Desktop/All/Cyber World/cyberworld-exchange/assets/cb-logo.png"
import ReceiveModal from "./modal/ReceiveModal";
import SwapModal from "./modal/SwapModal"
import SellModal from "./modal/SellModal"

const Header = ({walletAddress, connectWallet, sanityTokens, thirdWebTokens}) => {
    // console.log("sssssssssssssss", sanityTokens)
    // console.log("tttttttttttttttt", thirdWebTokens)
    // console.log("wwwwwwwwwww", walletAddress)
    const router = useRouter()
    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%,-50%)",
          backgroundColor: "#0a0b0d",
          padding: 0,
          border: "none",
        },
        overlay: {
          backgroundColor: "rgba(10,11,13,0.75)",
        },
      };

    return(
        <Wrapper>
        <Logo>
            <Image src={CoinbaseLogo} alt = "Coinbase Logo" />
        </Logo>
        <ButtonsContainer>
        <Link href = {'/?buy=1'}>
        < Button>
                Buy-Crypto
        </Button>
        </Link>
        <Link href = {'/?sell=1'}>
        < Button>
                Sell-Crypto
        </Button>
        </Link>
        <Link href = {'/?swap=1'}>
        < Button>
                Swap-Crypto
        </Button>
        </Link>
        <Link href = {'/?send=1'}>
            < Button>Send-Crypto</Button>
            </Link>
        <Link href = {'/?receive=1'}>
        < Button>
            Receive-Crypto
        </Button>
        </Link>
            <WalletLink>
                <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
                <WalletAddress>
                    {walletAddress.slice(0,11)}...{walletAddress.slice(35)}
                </WalletAddress>
            </WalletLink>
        </ButtonsContainer>
        <Modal
            isOpen = { !! router.query.buy}
            onRequestClose = {() => router.push('/')} 
            style = {customStyles}
            >
            <BuyModal          
                thirdWebTokens={thirdWebTokens}
                sanityTokens={sanityTokens}
                walletAddress={walletAddress}/>
        </Modal>
        <Modal
            isOpen = { !! router.query.sell}
            onRequestClose = {() => router.push('/')} 
            style = {customStyles}
            >
            <SellModal          
                thirdWebTokens={thirdWebTokens}
                sanityTokens={sanityTokens}
                walletAddress={walletAddress}/>
        </Modal>
        <Modal
            isOpen = { !! router.query.swap}
            onRequestClose = {() => router.push('/')} 
            style = {customStyles}
            >
            <SwapModal          
                thirdWebTokens={thirdWebTokens}
                sanityTokens={sanityTokens}
                walletAddress={walletAddress}/>
        </Modal>
        <Modal
            isOpen = { !! router.query.receive}
            onRequestClose = {() => router.push('/')} 
            style = {customStyles}
            >
            <ReceiveModal          
                thirdWebTokens={thirdWebTokens}
                sanityTokens={sanityTokens}
                walletAddress={walletAddress}/>
        </Modal>
        <Modal
            isOpen = { !! router.query.send}
            onRequestClose = {() => router.push('/')} 
            style = {customStyles}
            >
            <SendModal          
                thirdWebTokens={thirdWebTokens}
                sanityTokens={sanityTokens}
                walletAddress={walletAddress}/>
        </Modal>
    </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    width: calc(100% );
    padding: 1rem 1.5rem;
    border-bottom: 6px groove #66cad8;
    display: flex;
    align-items: center;
`

const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
    flex: 1;
`

const ButtonsContainer = styled.div`
    display: flex;
    margin-left: 1.8rem;
`

const Button = styled.div`
    border: 1px solid #66cad8;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 3.9rem;
    border-bottom: 5px solid #66cad8;
    margin-right: 1rem;

    &:hover{
        background-color: #FFA500;
        cursor: pointer;
    }
`
    
const WalletLink = styled.div`
  font-size: 0.8rem;
  border: 5px double #66cad8;
  border-radius: 50rem;
  font-size: 1.2rem;
  margin-right: 0.0rem;
  padding: 0 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #282b2f;
}
`

const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #ffdab9;
  font-weight: 600;
`

const WalletAddress = styled.div`
  font-size: 0.9rem;
`

const Logo = styled.div`
    width: 30%;
    object-fit: center;
    margin-left: 0rem;
    margin-top: 0.3rem;
    margin-right: 7rem;
    &:hover{
        cursor: pointer;
        background-color: #282b2f;
        border-radius: 10rem;
    }
`
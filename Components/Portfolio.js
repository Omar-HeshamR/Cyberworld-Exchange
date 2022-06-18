import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { coins } from "../Static/coins"
import Coin from './Coin'
import BalanceChart from './BalanceChart'

const Portfolio = ({thirdWebTokens, sanityTokens, walletAddress}) => {
    const tokenToUsd = {};
    const [walletBalance, setWalletBalance] = useState(0);

    for (const token of sanityTokens) {
      tokenToUsd[token.contractAddress] = Number(token.usdPrice);
    }

    useEffect(() => {
        const calculateTotalBalance = async () => {
          const totalBalance = await Promise.all(
            thirdWebTokens.map(async (token) => {
              const balance = await token.balanceOf(walletAddress);
              return Number(balance.displayValue) * tokenToUsd[token.address];
            })
          );
    
          setWalletBalance(totalBalance.reduce((acc, cur) => acc + cur, 0));
        };
    
        return calculateTotalBalance();
      }, [
        thirdWebTokens,
        sanityTokens,
      ]);

    return (
        <Wrapper> 
            <Content>
                <Chart>
                    <div>
                        <Balance>
                            <BalanceTitle>Account Wealth</BalanceTitle>
                            <BalanceValue>
                                {'$'}
                                {walletBalance.toLocaleString()}
                            </BalanceValue>
                        </Balance>
                    </div>
                    <BalanceChart/>
                </Chart>
             <PortofolioTable>
                <TableItem>
                    <Title>My Cryptocurrency</Title>
                </TableItem>
                <Divider />
                <Table>
                    <TableItem>
                        <TableRow>
                            <div style={{ flex:3 }}>Name</div>
                            <div style={{ flex:2 }}>Balance</div>
                            <div style={{ flex:1 }}>Price</div>
                            <div style={{ flex:1 }}>Allocation</div>
                            <div style={{ flex:0 }}>
                                <BsThreeDotsVertical/>
                            </div>
                        </TableRow>
                    </TableItem>
                    <Divider />
                    <div>{coins.map( coin => (
                        <div>
                            {<Coin coin = {coin} />}
                            <Divider />
                        </div>
                    ))}</div>
                </Table>
            </PortofolioTable>
            </Content>
        </Wrapper>
    )
}

export default Portfolio

const Wrapper = styled.div`
    flex: 1;
    height: calc(180vh);
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    width: 100%;
    max-width: 900px;
    padding: 2rem 1 rem;
    margin-top: 2rem;
`
const PortofolioTable = styled.div`
    margin-top: 2.2rem;
    border: 3px solid #66cad8;
    &:hover{
        border: 8px solid #66cad8;
        background-color: #141519;
    }
`

const Table = styled.div`
    width: 100%;
`

const TableRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > th {
        text-allign: left;
    }
`

const TableItem = styled.div`
    padding: 1rem 2rem;
`

const Divider = styled.div`
    border-bottom: 3px solid #66cad8;
`

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`
const Balance = styled.div``;

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`;

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;


const Chart = styled.div`
  border: 3px solid #66cad8;
  padding: 1rem 2rem;
  &:hover{
    border: 8px solid #66cad8;
    background-color: #141519;
}
`;

import React from "react";
import styled from "styled-components";

function Promos() {
  return (
    <Wrapper>
        <OfferCard>
        <Title>2022 Sweepstakes</Title>
        <Description>Make a trade over 100$ before 6/6/2022 to enter for a chance to win 10,000$ in bitcoin</Description>
        <Additional style={{ fontSize: "1.5rem" }}>
         <span>5 Winners</span> <span>Sweepstakes 4 </span>
        </Additional>
      </OfferCard>
      <OfferCard>
        <Title>Stake your Assets</Title>
        <Description>Earn up to 4.67% per year on staking</Description>
        <Placeholder />
        <Additional style={{ fontSize: "1.5rem" }}>
          $0.0096 <span>4.67% Per Year</span>
        </Additional>
      </OfferCard>
      <OfferCard>
        <Title>Learn and Earn</Title>
        <Description>Earn free Cryptocurrency in mintues</Description>
        <Placeholder />
        <Additional style={{ color: "#FFA500" }}>
          Verify Identity
        </Additional>
      </OfferCard>
      <OfferCard>
        <Title>CyberWorld Card</Title>
        <Description>Join for endless benfits by using the cryptoworld card !</Description>
        <Additional style={{ fontSize: "1.5rem" }}>
         <span>up to 10% Cashback </span> <span>Many Benfits!</span>
        </Additional>
      </OfferCard>
    </Wrapper>
  );
}

export default Promos;

const Wrapper = styled.div`
  margin-top: 2rem;
  padding-right: 1rem;
`;

const OfferCard = styled.div`
  width: 21rem;
  height: 11rem;
  border: 1px solid #282b2f;
  border-right: 5.5px solid #66cad8;
  margin-bottom: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  &:hover {
    background-color: #141519;
    cursor: pointer;
}
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.1rem;
`;

const Description = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const Placeholder = styled.div`
  flex: 1;
`;

const Additional = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    color: #8a919e !important;
    font-size: 1rem;
  }
`;
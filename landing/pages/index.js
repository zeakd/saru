import { useState, useEffect } from 'react';
import Head from 'next/head'
import styled from '@emotion/styled';

export default function Home() {
  const [introActive, setIntroActive] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIntroActive(true);
    }, 500)

    setTimeout(() => {
      setActive(true);
    }, 1000)
  }, []);

  return (
    <Base active={introActive}>
      <Overlay />
      <Content>
        <div>
          <Title>Cafe Saru</Title>
          <Divider width={20} active={active} />
          <a href='https://saru-shop.imweb.me/'><Button>Shop</Button></a>
        </div>
      </Content>
    </Base>
  )
}

const Base = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-size: contain;
  background-image: url('/mobile.jpg');
  @media (min-width: 680px) {
    background-image: url('/bg.jpg');
    background-size: cover;
  }

  background-position: center center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.5s;
  opacity: ${({ active }) => active ? 1 : 0};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* background-color: rgba(0,0,0, 0.5); */


`;

const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 800px;
  padding: 40px;
`

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  vertical-align: baseline;
  /* margin: 20px 0; */
  color: #2a2a2a;
`

const Divider = styled.div`
  width: ${({ active, width }) => active ? width : 0}px;
  height: 0;
  border-top: solid 2px #2a2a2a;
  margin: 0.5em 0;

  transition: width 0.3s;

`

const Button = styled.button`
  outline: 0;

  background-color: transparent;
  border: 2px solid #2a2a2a;
  color: #2a2a2a;
  font-size: 20px;
  padding: 10px 20px ;
  min-width: 200px;

  margin: 10px 0;

  transition: background-color 0.3s;

  :hover {
    background-color: #2a2a2a;
    color: white; 
  }

  :active {
    background-color: #ddd;
  }
`
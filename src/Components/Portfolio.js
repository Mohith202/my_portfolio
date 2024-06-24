import React from 'react'
import styled from 'styled-components'

const PortfolioSec = styled.div`
  background-color: rgb(30, 0, 60);
  color: gold;
  width: 87.5%;
  font-family: serif;
  font-size: 1.3em;
  position: absolute;
  top: 1380px;
  overflow-x: hidden;
  right: 0;
  padding: 10px;
  padding-bottom: 35px;
  @media (max-width: 640px) {
    width: 100%;
    top: 1650px;
  }
  @media (min-width: 592px) and (max-width: 640px) {
    top: 1700px;
  }
`
const PortfolioCon = styled.h1`
  width: 100%;
  text-align: center;
`
const Flexcol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Card = styled.div`
  width: 220px;
  height: 250px;
  padding: 10px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  border: 3px solid gold;
  border-radius: 10px;
  margin: 25px;
  cursor: pointer;
  h3 {
    text-align: center;
    margin: -8px 0px 10px 0px;
    line-height: 1.25;
  }
  img {
    width: 200px;
    margin-top: 6px;
    border-radius: 10px;
  }
  &:hover {
    background-color: rgb(30, 10, 100);
  }
`
const Flexrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 640px) {
    align-items: center;
  }
`
const Portfolio = () => {
  return (
    <>
      <PortfolioSec id="portfolio">
        <Flexcol>
          <PortfolioCon>My Portfolio</PortfolioCon>
          <Flexrow>
            <Card
              onClick={() =>
                window !== undefined
                  ? window.open('https://ema-chatbot.streamlit.app/')
                  : ''
              }
            >
              <h3>Chatbot Model</h3>
              <img src="./Chatbot.png" alt="ChatBot Model" />
            </Card>

            <Card
              onClick={() =>
                window !== undefined
                  ? window.open('https://huggingface.co/spaces/Mohammed-Altaf/Farmwise')
                  : ''
              }
            >
              <h3>FramWise (Hackathon)</h3>
              <img src="./Farmbot.png" alt="FreamWise" />
            </Card>

            <Card
              onClick={() =>
                window !== undefined
                  ? window.open(
                    'https://github.com/Mohith202/RemoteBrick',
                        )
                  : ''
              }
            >
              <h3>Brick API</h3>
              <img src="./wordGuesser.jpeg" alt="Brick API" />
            </Card>

            <Card
              onClick={() =>
                window !== undefined
                ? window.open(
                'https://github.com/Mohith202/MyPlaces',)
                  : ''
              }
            >
              <h3>My Places</h3>
              <img src="./Myplace.png" alt="My Places" />
            </Card>

            <Card
              onClick={() =>
                window !== undefined
                  ? window.open(
                    'https://mohith202.github.io/NewsBoy/',
                    )
                  : ''
              }
            >
              <h3>NewsBoy</h3>
              <img src="./Newsboy.png" alt="New Boy" />
            </Card>

            <Card
              onClick={() =>
                window !== undefined
                  ? window.open(
                    'https://mohith202.github.io/Weather-Teller/',
                    )
                  : ''
              }
            >
              <h3>Wether Teller</h3>
              <img src="./temperature.jpeg" alt="Wether Teller" />
            </Card>

            {/* <Card
              onClick={() =>
                window !== undefined
                  ? window.open(
                    )
                  : ''
              }
            >
              <h3>Palindrome Checker</h3>
              <img src="./palindrome.jpeg" alt="Palindrome Checker" />
            </Card> */}
          </Flexrow>
        </Flexcol>
      </PortfolioSec>
    </>
  )
}

export default Portfolio

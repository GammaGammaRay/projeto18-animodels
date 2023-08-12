import React from "react"
import { styled } from "styled-components"

function Logo() {
  return <LogoContainer><img src="logo_animodels.svg"></img></LogoContainer>
}

const LogoContainer = styled.div`
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-weight: 200;
  font-size: 40px;
  width: 100%;
  height: 150px;
  /* background-color: lightgreen; */
  img {
    height: 250px;
    position: relative;
    top: 5px;
    fill: #8ca247;
  }
`

export default Logo

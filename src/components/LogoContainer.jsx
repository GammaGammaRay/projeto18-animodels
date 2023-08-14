import React from "react"
import { styled } from "styled-components"
import logo_animodels from "../assets/logo_animodels.svg";

function Logo() {
  return <LogoContainer><img src={logo_animodels}></img></LogoContainer>
}

const LogoContainer = styled.div`
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  font-size: 40px;
  width: 100%;
  height: fit-content;
  img {
    height: 250px;
    /* position: relative; */
    top: 5px;
    fill: #8ca247;
  }
`

export default Logo

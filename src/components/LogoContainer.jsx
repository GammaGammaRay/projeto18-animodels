import React from "react"
import { styled } from "styled-components"

function Logo() {
  return <LogoContainer>animodels</LogoContainer>
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
    height: 70px;
    position: relative;
    top: 5px;
  }
`

export default Logo

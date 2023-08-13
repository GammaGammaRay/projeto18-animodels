import React from "react"
import { styled } from "styled-components"
import { Link } from "react-router-dom"

// import { UserContext } from "../contexts/UserContext"
// import { api } from '../services/api.js'

function Nav() {
  // const { auth, userSignIn } = useContext(UserContext)
  return (
    <NavContainer>
      <NavLeft />
      <NavRight>
        <StyledLink to={"/signin"}>Entrar</StyledLink>
        <StyledLink to={"/signup"}>Cadastrar</StyledLink>
      </NavRight>
    </NavContainer>
  )
  // if(auth) {
  //   return (
  //     <NavContainer>
  //       <NavLeft>
  //         Olá, `${}`
  //       </NavLeft>
  //       <NavRight>

  //       </NavRight>
  //     </NavContainer>)
  //   }
  // else {
  //   return (
  //   <NavContainer>
  //     <NavRight>
  //       <Link to={'/signin'}>Entrar</Link>
  //       <Link to={'/signup'}>Cadastrar</Link>
  //     </NavRight>
  //   </NavContainer>)
  // }
}

const NavContainer = styled.div`
  width: 100%;
  height: 40px;
  top: 0px;
  left: 0px;
  position: fixed;
  /* position: absolute; */
  z-index: 5;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 6px 4px #00000024;
  background-color: #adc857;
`

const NavLeft = styled.div`
  width: fit-content;
  left: 0;
  flex-direction: row;
  justify-content: start;
`
const NavRight = styled.div`
  width: fit-content;
  height: 100%;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: 300;
    width: fit-content;
    margin-left: 10px;
    color: white;

  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px 10px;
  display: flex;
  align-items: center;
`
export default Nav

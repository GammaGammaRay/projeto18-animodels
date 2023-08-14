import React, { useContext, useEffect, useState } from "react"
import { styled } from "styled-components"
import { Link, useNavigate } from "react-router-dom"

import { UserContext } from "../context/user.context.jsx"

function Nav() {
  const navigate = useNavigate()

  const { auth, logout } = useContext(UserContext)
  const [isLogged, setIsLogged] = useState(false)
  console.log(auth)
  const handleSignOut = (e) => {
    e.preventDefault()
    navigate("/")
    logout()
  }

  useEffect(() => {
    setIsLogged(auth.length > 0)
  }, [auth])

  function SignOutLink() {
    return (
      <Link to="/" onClick={handleSignOut}>
        Signout
      </Link>
    )
  }

  if (!isLogged) {
    return (
      <NavContainer>
        <NavLeft />
        <NavRight>
          <StyledLink to={"/signin"}>Login</StyledLink>
          <StyledLink to={"/signup"}>Register</StyledLink>
        </NavRight>
      </NavContainer>
    )
  } else {
    return (
      <NavContainer>
        <NavLeft>Hello, {auth[0]?.userName}</NavLeft>
        <NavRight>
          <StyledLink to={"/managemodels"}>Manage Models</StyledLink>
          <StyledLink to={"/newmodel"}>New Model</StyledLink>
          <SignOutLink />
        </NavRight>
      </NavContainer>
    )
  }
}

const NavContainer = styled.div`
  width: 100%;
  height: 40px;
  top: 0px;
  left: 0px;
  position: fixed;
  z-index: 5;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 6px 4px #00000024;
  background-color: #adc857;
  color: white;
  a {
    font-weight: 300;
    width: fit-content;
    margin-left: 10px;

    text-decoration: none;
    padding: 5px 10px;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    a{
      font-size: 12px;
      margin-left: 1px;
      padding: 2px 5px;
    }
  }
`

const NavLeft = styled.div`
  width: fit-content;
  left: 0;
  margin-left: 8px;
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
`
const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px 10px;
  display: flex;
  align-items: center;
`

export default Nav

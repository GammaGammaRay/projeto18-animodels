import React from "react"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Logo from "../components/LogoContainer"
import { ContentContainer } from "../style/PageContainers"

function Home() {
  return (
    <ContentContainer>
      <Logo />
    </ContentContainer>
  )
}

export default Home

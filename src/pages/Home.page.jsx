import React from "react"
import Logo from "../components/LogoContainer"
import { ContentContainer } from "../style/PageContainers"
import ModelList from "../components/ModelList"

function Home() {
  return (
    <ContentContainer>
      <Logo />
      <ModelList />
    </ContentContainer>
  )
}

export default Home

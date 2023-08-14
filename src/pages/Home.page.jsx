import React from "react"
import Logo from "../components/LogoContainer"
import { ContentContainer } from "../style/PageContainers"
import ModelList from "../components/ModelList"
import { styled } from "styled-components"

function Home() {
  return (
    <HomePageContainer> {/* Use the styled component here */}
      <Logo />
      <ModelList />
    </HomePageContainer>
  )
}

const HomePageContainer = styled(ContentContainer)` 
  position: relative;
  margin-top: 20px;
`
export default Home

import { styled } from "styled-components"

const PageContainer = styled.div`
  font-family: "Nunito Sans";
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`
const ContentContainer = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: green; */
`

export { PageContainer, ContentContainer }

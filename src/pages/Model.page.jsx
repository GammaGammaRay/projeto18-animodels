import React from "react"
import { ContentContainer } from "../style/PageContainers"
import { styled } from "styled-components"

function Model({ animal }) {
  const {
    animalId,
    animalName,
    description,
    hirePrice,
    photoMain,
    contact,
    available,
  } = animal

  return (
    <ContentContainer>
      <ItemLeft>
        <ModelImage src={photoMain} alt={animalName} />
      </ItemLeft>
      <ItemRight>
        <h3>{animalName}</h3>
        <p>{description}</p>
        <p>Hire Price: R$ {hirePrice.toFixed(2)}</p>
        <p>Contact: {contact}</p>
        <p>Available: {available ? "Yes" : "No"}</p>
      </ItemRight>
    </ContentContainer>
  )
}

const ItemLeft = styled.div``
const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
`
const ModelImage = styled.img`
  height: 100px;
`

export default Model

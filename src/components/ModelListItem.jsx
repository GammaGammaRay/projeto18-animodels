import React from "react"
import { styled } from "styled-components"

function ModelListItem({ animal }) {
  const { animalName, description, hirePrice, photoMain, contact, available } =
    animal

  return (
    <ModelListItemContainer>
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
    </ModelListItemContainer>
  )
}

const ModelListItemContainer = styled.div`
  width: 100%;

  border: 1px;
  border-style: solid;
  border-color: darkgray;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
`

const ItemLeft = styled.div``
const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
`
const ModelImage = styled.img`
  height: 100px;
`

export default ModelListItem

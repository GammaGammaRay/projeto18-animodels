import React from "react"
import { Link } from "react-router-dom"
import { styled } from "styled-components"

function ModelListItem({ animal }) {
  const { animalId, animalName, description, hirePrice, photoMain, contact, available } =
    animal

  return (
    <ModelLinkContainer to={`/animal/${animalId}`}>
      <ItemImage>
        <ModelImage src={photoMain} alt={animalName} />
      </ItemImage>
      <ItemName>
        <h3>{animalName}</h3>
        {/* <p>{description}</p>
        <p>Hire Price: R$ {hirePrice.toFixed(2)}</p>
        <p>Contact: {contact}</p>
        <p>Available: {available ? "Yes" : "No"}</p> */}
      </ItemName>
    </ModelLinkContainer>
  )
}

const ModelLinkContainer = styled(Link)`
  width: 100px;
  color: #3d3d3d;
  border: 1px;
  border-style: solid;
  border-color: darkgray;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3 {
    width: 100%;
    font-weight: 700;
    background-color: darkgre;
  }
`

const ItemImage = styled.div``
const ItemName = styled.div`
  display: flex;
  flex-direction: column;
`
const ModelImage = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 5px;
`

export default ModelListItem

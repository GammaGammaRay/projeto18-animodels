import React, { useState, useEffect } from "react"
import { getAnimalList } from "../service/api"
import { styled } from "styled-components"

import ModelListItem from "./ModelListItem"

function ModelList() {
  const [animalList, setAnimalList] = useState([])

  useEffect(() => {
    async function fetchAnimalList() {
      try {
        const fetchedAnimalList = await getAnimalList()
        console.log(fetchedAnimalList)
        setAnimalList(fetchedAnimalList)
      } catch (error) {
        console.error("Error fetching animal list:", error.message)
      }
    }
    fetchAnimalList()
    console.log(animalList)
  }, [])

  const visibleAnimalList = animalList.filter((animal) => !animal.hide)

  return (
    <ModelListContainer>
      {visibleAnimalList.map((animal) => (
        <ModelListItem key={animal.animalId} animal={animal} />
      ))}
    </ModelListContainer>
  )
}

const ModelListContainer = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  margin-bottom: 150px;
`
// const ModelListContainer = styled.div``

export default ModelList

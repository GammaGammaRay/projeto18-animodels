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
        setAnimalList(fetchedAnimalList)
      } catch (error) {
        console.error("Error fetching animal list:", error.message)
      }
    }
    fetchAnimalList()
    console.log(animalList)
  }, [])

  return (
    <ModelListContainer>
      {animalList.map((animal) => (
        <ModelListItem key={animal.animalId} animal={animal} />
      ))}
    </ModelListContainer>
  )
}

const ModelListContainer = styled.div`
  width: 80%;
`
// const ModelListContainer = styled.div``

export default ModelList

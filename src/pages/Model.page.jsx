import React, { useEffect, useState } from "react"
import { ContentContainer } from "../style/PageContainers"
import { styled } from "styled-components"
import { getAnimalById } from "../service/api"
import { useParams, Link } from "react-router-dom"
import Logo from "../components/LogoContainer.jsx"
import logo_animodels from "../../assets/logo_animodels.svg"

function Model() {
  const [animal, setAnimal] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function fetchAnimal() {
      try {
        const response = await getAnimalById(id)
        // console.log("Response: " + JSON.stringify(response, null, 2))
        setAnimal(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchAnimal()
  }, [id])

  if (animal === null) {
    return <p>Loading...</p>
  }
  const { animalName, description, photoMain, hirePrice, available } = animal
  console.log("Animal: " + animal)
  const { tel, userImage, userName } = animal.userData
  const formattedTel = `(${tel.slice(0, 2)}) ${tel.slice(2, 7)}-${tel.slice(7)}`

  return (
    <ContentContainer>
      <Link to={"/"}>
        <LogoContainer>
          <img src={logo_animodels} />
        </LogoContainer>
      </Link>
      <AnimalContainer>
        <h2>{animalName}</h2>
        <AnimalInfoContainer>
          <AnimalPhoto src={photoMain} />
          <AnimalInfo>
            <DescriptionContainer>
              <h3>
                Description:
                <br />
              </h3>
              <p>{description}</p>
            </DescriptionContainer>
            <div>
              <p>Per day: R$ {hirePrice.toFixed(2)}</p>
              <p>Contact: {formattedTel}</p>
              <AvailabilityStatus available={available}>
                {available ? "Available" : "Not Available"}
              </AvailabilityStatus>
            </div>
          </AnimalInfo>
        </AnimalInfoContainer>
      </AnimalContainer>
    </ContentContainer>
  )
}

const AnimalContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  h2 {
    font-size: 26px;
    font-weight: 600;
  }
  h3 {
    font-size: 21px;
    font-weight: 500;
  }
`
const AnimalPhoto = styled.img`
  max-height: 100%px;
  max-width: 250px;
  object-fit: cover;
  border-radius: 5px;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  p {
    text-align: start;
  }
  margin-bottom: 80px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`
const AnimalInfoContainer = styled.div`
  height: fit-content;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* text-align: start; */
  border: 2px;
  border-style: solid;
  border-color: darkgray;
  border-radius: 10px;
  padding: 5px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 150px;
    align-items: center;
  }
`

const AnimalInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px 0 10px;

  p {
    /* text-align: end; */
  }
  div {
    width: 100%;
    text-align: end;
  }
`

const LogoContainer = styled.div`
  top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 200;
  font-size: 40px;
  width: 100%;
  height: fit-content;
  img {
    height: 250px;
    top: 5px;
    fill: #8ca247;
  }
`

const AvailabilityStatus = styled.p`
  color: ${(props) => (props.available ? "green" : "red")};
  margin-top: 10px;
  font-weight: 600;
`



export default Model

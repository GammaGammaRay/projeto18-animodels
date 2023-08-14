import React, { useEffect, useState } from "react"
import { ContentContainer } from "../style/PageContainers"
import { styled } from "styled-components"
import { getAnimalById } from "../service/api"
import { useParams, Link } from "react-router-dom"
import Logo from "../components/LogoContainer.jsx"

function Model() {
  const [animal, setAnimal] = useState({})
  const { id } = useParams()

  useEffect(() => {
    async function fetchAnimal() {
      try {
        const response = await getAnimalById(id)
        console.log("Response: " + response)
        setAnimal(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchAnimal()
  }, [id])

  // console.log("Animal: " + animal)
  const { animalName, description, photoMain, hirePrice, available } = animal
  const { tel, userImage, userName } = animal.userData
  console.log(animalName)

  return (
    <ContentContainer>
      <Link to={"/"}>
        <LogoContainer>
          <img src={"../logo_animodels.svg"} />
        </LogoContainer>
      </Link>
      <AnimalContainer>
        <h2>{animalName}</h2>
        <AnimalInfoContainer>
          <AnimalPhoto src={photoMain} />
          <AnimalInfo>
            <p>
              <h3>
                Description:
                <br />
              </h3>
              {description}
            </p>
            <div>
              <p>Per day: R$ {hirePrice.toFixed(2)}</p>
              <p>Contact: {tel}</p>
              <AvailabilityStatus available={available}>
                {available ? "Available" : "Not Available"}
              </AvailabilityStatus>
            </div>
          </AnimalInfo>
        </AnimalInfoContainer>
      </AnimalContainer>

      {/* <ItemLeft>
        <ModelImage src={photoMain} alt={animalName} />
      </ItemLeft>
      <ItemRight>
        <h3>{animalName}</h3>
        
      </ItemRight> */}
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
  max-height: 300px;
  max-width: 300px;
`
const AnimalInfoContainer = styled.div`
  height: fit-content;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

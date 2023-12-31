import React, { useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { styled } from "styled-components"
import Swal from "sweetalert2"
import axios from "axios"

import { ContentContainer } from "../style/PageContainers"
import { Form } from "../components/ui/Form.component"
import Logo from "../components/LogoContainer"
import { UserContext } from "../context/user.context"

function NewModel() {
  const navigate = useNavigate()
  const { auth, token } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    animalName: "",
    description: "",
    hirePrice: "",
    photoMain: "",
    contact: auth[0].tel,
    available: false,
    authorId: auth[0].userId,
    hide: false,
  })

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  function handleChange(key, value) {
    console.log("Form data: " + formData.hide)
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }))
  }

  const handleNewModel = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await axios.post(
        `${import.meta.env.VITE_API_URL}/animals`,
        formData,
        config
      )
      Swal.fire({
        title: `<span style=";font-size: 18px">Model Added!</span>`,
        width: 320,
        confirmButtonColor: "#adc857",
      })
      navigate("/")
    } catch (error) {
      if (error.response) {
        const {
          status,
          statusText,
          data: { message },
        } = error.response
        setIsLoading(false)
        Swal.fire({
          title: `<span style=";font-size: 18px">${status} ${statusText}\n${message}</span>`,
          width: 320,
          confirmButtonColor: "#adc857",
        })
      } else {
        setIsLoading(false)
        Swal.fire({
          title: `<span style=";font-size: 18px">An error occurred: ${error.message}</span>`,
          width: 320,
          confirmButtonColor: "#adc857",
        })
      }
    }
  }
  return (
    <ContentContainer>
      <Link to={"/"}>
        <Logo />
      </Link>
      <Form>
        <form onSubmit={handleNewModel}>
          <input
            type="text"
            placeholder="Model Name"
            disabled={isLoading}
            onChange={(e) => handleChange("animalName", e.target.value)}
            value={formData.animalName}
            required
          ></input>
          <DescriptionContainer
            placeholder="Description"
            disabled={isLoading}
            onChange={(e) => handleChange("description", e.target.value)}
            value={formData.description}
            rows={4}
            required
          ></DescriptionContainer>
          <input
            type="price"
            placeholder="Hire price"
            title="Please insert a valid telefone, using two-digit area code and nine-digit number, ex: 11956045122"
            disabled={isLoading}
            onChange={(e) => handleChange("hirePrice", e.target.value)}
            value={formData.hirePrice}
            required
          ></input>
          <input
            type="url"
            placeholder="Profile image URL"
            disabled={isLoading}
            onChange={(e) => handleChange("photoMain", e.target.value)}
            value={formData.photoMain}
            required
          ></input>
          <Checkbox>
            <input
              type="checkbox"
              placeholder="Available"
              disabled={isLoading}
              onChange={(e) => handleChange("available", e.target.checked)}
              value={formData.available}
              ></input>
              <span>Is this animal available?</span>
          </Checkbox>
          <Checkbox>
            <input
              type="checkbox"
              placeholder="Hide"
              disabled={isLoading}
              onChange={(e) => handleChange("hide", !e.target.checked)}
              value={formData.hide}
              ></input>
              <span>Would you like your animal profile to be hidden?</span>
          </Checkbox>

          <button disabled={isLoading}>
            {!isLoading ? "Add New Model" : "Loading..."}
          </button>
        </form>
      </Form>
    </ContentContainer>
  )
}

const DescriptionContainer = styled.textarea`
  width: 100%;
  height: 150px;
  resize: vertical;
  padding: 5px;
`
const Checkbox = styled.div`
  font-size: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* white-space: nowrap; */
  justify-content: start;
  align-items: center;
  input {
    width: fit-content;
    height: 24px; 
    margin-right: 5px;
  }
`

export default NewModel

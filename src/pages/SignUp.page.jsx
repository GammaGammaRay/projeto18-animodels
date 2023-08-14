import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Swal from "sweetalert2"
import axios from "axios"

import Logo from "../components/LogoContainer"
import { Form } from "../components/ui/Form.component"
import { ContentContainer } from "../style/PageContainers"
import { styled } from "styled-components"

function SignUp() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    tel: "",
    cpf: "",
    userImage: "",
    password: "",
    confirmPassword: "",
  })

  function handleChange(key, value) {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }))
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    console.log(formData)
    if (formData.confirmPassword !== formData.password) {
      return Swal.fire({
        title: `<span style=";font-size: 18px">Passwords do not match!</span>`,
        width: 320,
        confirmButtonColor: "#adc857",
      })
    }
    try {
      setIsLoading(true)
      await axios.post(`${import.meta.env.VITE_API_URL}/signup`, formData)
      Swal.fire({
        title: `<span style=";font-size: 18px">Succesfully registered!</span>`,
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
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Name"
            disabled={isLoading}
            onChange={(e) => handleChange("userName", e.target.value)}
            value={formData.userName}
            required
          ></input>
          <input
            type="email"
            placeholder="Email"
            disabled={isLoading}
            onChange={(e) => handleChange("email", e.target.value)}
            value={formData.email}
            required
          ></input>
          <input
            type="tel"
            placeholder="Contact number"
            pattern="[0-9]{11}"
            title="Please insert a valid telefone, using two-digit area code and nine-digit number, ex: 11956045122"
            disabled={isLoading}
            onChange={(e) => handleChange("tel", e.target.value)}
            value={formData.tel}
            required
          ></input>
          <input
            type="text"
            placeholder="CPF"
            pattern="[0-9]{11}"
            title="Please insert an 11-digit ID"
            disabled={isLoading}
            onChange={(e) => handleChange("cpf", e.target.value)}
            value={formData.cpf}
            required
          ></input>
          <input
            type="url"
            placeholder="Profile image URL"
            disabled={isLoading}
            onChange={(e) => handleChange("userImage", e.target.value)}
            value={formData.userImage}
          ></input>
          <input
            type="password"
            placeholder="Password"
            disabled={isLoading}
            onChange={(e) => handleChange("password", e.target.value)}
            value={formData.password}
            required
          ></input>
          <input
            type="password"
            placeholder="Confirm password"
            disabled={isLoading}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            value={formData.confirmPassword}
            required
          ></input>
          <button disabled={isLoading}>
            {!isLoading ? "Register" : "Loading..."}
          </button>
        </form>
      </Form>
      <StyledLink onClick={() => navigate("/signin")}>
        Already have an account?
      </StyledLink>
    </ContentContainer>
  )
}

const StyledLink = styled(Link)`
  color: darkgray;
  cursor: pointer;
  text-decoration: none;
  &:hover{
    color: white;
  }
`;

export default SignUp

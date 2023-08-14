import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Logo from "../components/LogoContainer"
import { ContentContainer } from "../style/PageContainers"
import { UserRegistrationForm } from "../components/ui/UserRegistrationForm.component"
import { signIn } from "../service/api"

function SignIn() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    console.log(formData)
    function registerSuccess() {
      // console.log(formData)
      navigate("/")
    }

    function registerFailure() {}

    signIn(formData, registerSuccess, registerFailure)
  }
  return (
    <ContentContainer>
      <Link to={"/"}>
        <Logo />
      </Link>
      <UserRegistrationForm>
        <form onSubmit={handleSignIn}>
          <input
            placeholder="E-mail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Entrar</button>
        </form>
      </UserRegistrationForm>
    </ContentContainer>
  )
}

export default SignIn

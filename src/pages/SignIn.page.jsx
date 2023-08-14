import React, { useContext, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Logo from "../components/LogoContainer"
import { ContentContainer } from "../style/PageContainers"
import { Form } from "../components/ui/Form.component"
import { signIn } from "../service/api"
import { UserContext } from "../context/user.context"

function SignIn() {
  const navigate = useNavigate()

  const { login } = useContext(UserContext)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  // const handleSignIn = async (e) => {
  //   e.preventDefault()

  //   try {
  //     const res = await signIn(formData) // Assuming signIn is an asynchronous function
  //     const { rows, token } = res.data // Extract data from the response
  //     login({ rows, token }) // Call the login function with the extracted data
  //     navigate("/")
  //   } catch (error) {
  //     console.error("Sign in error:", error.message)
  //     // Handle sign-in error here
  //   }
  // }
  
  const handleSignIn = (e) => {
    e.preventDefault()

    console.log(formData)
    function registerSuccess(res) {
      const { rows, token } = res;
      login(rows,token)
      navigate("/")
    }

    function registerFailure() {}

    signIn(formData, login, registerSuccess, registerFailure)
  }
  return (
    <ContentContainer>
      <Link to={"/"}>
        <Logo />
      </Link>
      <Form>
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
      </Form>
    </ContentContainer>
  )
}

export default SignIn

import { useState, createContext } from "react"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext()

export default function UserProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth")) || {};

  const [auth, setAuth] = useState(persistedAuth)
  const [token, setToken] = useState("")

  function login(authData, token) {
    setAuth(authData)
    setToken(token)

    localStorage.setItem("token", JSON.stringify(token))
    localStorage.setItem("auth", JSON.stringify(authData))
  }
  function logout() {
    setAuth("")
    setToken(null)
    localStorage.removeItem("auth")
    localStorage.removeItem("token")
  }

  return (
    <UserContext.Provider value={{ auth, setAuth, token, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

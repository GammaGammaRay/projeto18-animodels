import { useState, createContext } from "react"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext()

export default function UserProvider({ children }) {
  // const persistedAuth = JSON.parse(localStorage.getItem("auth"))

  const [auth, setAuth] = useState()

  function login(authData) {
    setAuth(authData)
    localStorage.setItem("auth", JSON.stringify(authData)) // Convert to JSON string
  }

  return (
    <UserContext.Provider value={{ auth, login }}>
      {children}
    </UserContext.Provider>
  )
}


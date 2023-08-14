import { useState, createContext } from "react"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext()

export default function UserProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"))
  const persistedHires = JSON.parse(localStorage.getItem("hires"))

  const [auth, setAuth] = useState(persistedAuth)
  const [hires, setHires] = useState(persistedHires)

  function login(authData) {
    setAuth(authData)
    localStorage.setItem("auth", JSON.stringify(authData))
  }

  // function updateHires(hireData) {
  //   setSubscription(hireData)
  //   localStorage.setItem("hires", JSON.stringify(hires))
  // }

  return (
    <UserContext.Provider
      value={{ auth, setAuth, hires, setHires, login, updateHires }}
    >
      {children}
    </UserContext.Provider>
  )
}

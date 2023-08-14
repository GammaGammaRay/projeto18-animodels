import { BrowserRouter, Route, Routes } from "react-router-dom"

import { PageContainer } from "./style/PageContainers.jsx"
import SignIn from "./pages/SignIn.page.jsx"
import SignUp from "./pages/SignUp.page.jsx"
import Home from "./pages/Home.page.jsx"
import Model from "./pages/Model.page.jsx"
import NewModel from "./pages/AddModel.page.jsx"
import Nav from "./components/Nav.jsx"
import UserProvider, { UserContext } from "./context/user.context.jsx"
import { useContext } from "react"

function App() {
  const { auth, login }= useContext(UserContext)
  
  const { token, name } = loginData
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  useEffect(() => {
    if (Object.keys(loginData).length > 0) {
      localStorage.setItem("config", JSON.stringify(config))
      localStorage.setItem("name", name)
    }
  }, [loginData])

  return (
    <UserProvider>
      <PageContainer>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/model/:animalid" element={<Model />} />
            <Route path="/newmodel" element={<NewModel />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
      //{" "}
    </UserProvider>
  )
}

export default App

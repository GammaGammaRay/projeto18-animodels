import { BrowserRouter, Route, Routes } from "react-router-dom"

import { PageContainer } from "./style/PageContainers.jsx"
import SignIn from "./pages/SignIn.page.jsx"
import SignUp from "./pages/SignUp.page.jsx"
import Home from "./pages/Home.page.jsx"
import Model from "./pages/Model.page.jsx"
import NewModel from "./pages/AddModel.page.jsx"
import Nav from "./components/Nav.jsx"
import UserProvider, { UserContext } from "./context/user.context.jsx"
import ManageModels from "./pages/ManageModels.page.jsx"

function App() {

  return (
    <UserProvider>
      <PageContainer>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/animal/:id" element={<Model />} />
            <Route path="/newmodel" element={<NewModel />} />
            <Route path="/managemodels" element={<ManageModels />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
      //{" "}
    </UserProvider>
  )
}

export default App

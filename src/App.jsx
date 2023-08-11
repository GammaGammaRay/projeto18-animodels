import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

import { PageContainer } from "./style/PageContainers.jsx"
import SignIn from "./pages/SignIn.page.jsx"
import SignUp from "./pages/SignUp.page.jsx"
import Home from "./pages/Home.page.jsx"
import Hire from "./pages/Hire.page.jsx"
import Model from "./pages/Model.page.jsx"
import Nav from "./components/Nav.jsx"

function App() {
  return (
    // <UserProvider>
    <PageContainer>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/model/:animalid" element={<Model />} />
        </Routes>
      </BrowserRouter>
    </PageContainer>
    // </UserProvider>
  )
}

export default App

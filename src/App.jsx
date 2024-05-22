import { Container } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"  
import UserPage from "./pages/UserPage"
import PostPage from "./pages/PostPage"
import Header from "./components/Header"

function App() {

  return (
    <Container maxWidth={"620px"}>
      <Header/>

    <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:postId" element={<PostPage />} />
        
      </Routes>

    </Container>
  )
}

export default App

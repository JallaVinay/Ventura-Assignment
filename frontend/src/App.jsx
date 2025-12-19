import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import IpoDetails from "./pages/IpoDetails"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ipo/:id" element={<IpoDetails />} />
    </Routes>
  )
}

export default App

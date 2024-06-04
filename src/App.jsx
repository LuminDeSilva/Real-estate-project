import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Profile from "./pages/profile"
import SignOut from "./pages/signOut"
import signIn from "./pages/signIn"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signOut" element={<SignOut />} />
        <Route path="/signIn" element={<signIn />} />
      </Routes>
    </BrowserRouter>
  )
}

import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <div>
      <Toaster />
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </div>
  )
}

export default App

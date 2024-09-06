import react from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'


function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />
}

// This function is used to clear the local storage before registration of a new user
function RegisterAndLogout() {
  localStorage.clear();
  return <Register />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap ProtectedRoute around each component meant for only logged in users */}
        <Route path="/" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App

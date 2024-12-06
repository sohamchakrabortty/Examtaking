import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import {BrowserRouter, Routes,
  Route,} from 'react-router-dom'
import Exampage from './pages/Exampage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login/> */}
      <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Login />}
                    />
                    <Route
                        exact
                        path="/exam"
                        element={<Exampage />}
                    />
                </Routes>
            </BrowserRouter>
    </>
  )
}

export default App

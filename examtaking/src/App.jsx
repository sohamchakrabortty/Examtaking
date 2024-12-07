import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import {BrowserRouter, Routes,
  Route,} from 'react-router-dom'
import Exampage from './pages/Exampage'
import { Provider } from 'react-redux';
import store from '../store'
// import Questionpages from './pages/Questionpages'
import StartExam from './pages/StartExam'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login/> */}
     <Provider store={store}>
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
                    <Route
                        exact
                        path="/startexam"
                        element={<StartExam />}
                    />
                    <Route
                        exact
                        path="/questionpage"
                        element={<h1>ghgh</h1>}
                    />
                </Routes>
            </BrowserRouter>
            </Provider>
    </>
  )
}

export default App

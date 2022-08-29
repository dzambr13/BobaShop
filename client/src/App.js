import './styles/App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Bobas from './components/Bobas'
import axios from 'axios'
import { useEffect, useState } from 'react'
import BobaDetails from './components/BobaDetails.jsx'
import Login from './components/Login'
import Thanks from './components/Thanks'
// import review from '../../models/review'

const BASE_URL = '/api'

function App() {
  const [postValues, setPostValues] = useState([])

  const [bobas, setBobas] = useState([])
  useEffect(() => {
    const getBobas = async () => {
      const res = await axios.get(`${BASE_URL}/boba`)
      console.log(res)
      setBobas(res.data)
    }
    getBobas()
  }, [])

  const getPost = async () => {
    const res = await axios.get(`${BASE_URL}/review`)
    console.log(res)
    setPostValues(res.data)
  }
  useEffect(() => {
    getPost()
  }, [])

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bobas" element={<Bobas bobas={bobas} />} />
          <Route path="/Bobas/:id" element={<BobaDetails />} />
          <Route
            path="/Login"
            element={
              <Login
                postValues={postValues}
                setPostValues={setPostValues}
                getPost={getPost}
              />
            }
          />
          <Route path="/Thanks" element={<Thanks />} />
          <Route
            path="/Update"
            element={
              <Update postValues={postValues} setPostValues={setPostValues} />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App

// mondoDB link
// mongodb+srv://dzambr:1234@bobashop.c9yoy.mongodb.net/?retryWrites=true&w=majority

// heroku config:set MONGODB_URI='mongodb+srv://dzambr:1234@bobashop.c9yoy.mongodb.net/?retryWrites=true&w=majority'

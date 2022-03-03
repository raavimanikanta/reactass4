import React from "react"
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import Home from "./Home"
import Student from "./Student"
import Contact from "./Contact"
import Navbar from "./Navbar"

const App =() => {
    return(
        <div className="background">
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/student" element={<Student />} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
            {/* <Student /> */}
        </Router>
        </div>
    )

}
export default App
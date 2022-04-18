import React from 'react'
import { Navbar, Accueil, Panier } from './components'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import './App.css'

const App = () => (
    <div >
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/panier" element={<Panier />} />

            </Routes>

        </Router>


    </div >
);

export default App
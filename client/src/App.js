import React from 'react'
import { Accueil, Panier } from './components'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import './App.css'

const App = () => (
    <div >
        <Router forceRefresh={true}>

            <Routes >
                <Route path="/" element={<Accueil />} />
                <Route path="/panier" element={<Panier />} />


            </Routes>

        </Router>


    </div >
);

export default App
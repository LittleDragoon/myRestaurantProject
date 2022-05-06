import React from 'react'
import { Panier } from './components'
import {HomeScreen, AdminScreen} from "./Screens"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import './App.css'

const App = () => (
    <div >
        <Router forceRefresh={true}>

            <Routes >
                <Route path="/" element={<HomeScreen />} />
                <Route path="/panier" element={<Panier />} />
                <Route path="/admin" element={<AdminScreen/>} />



            </Routes>

        </Router>


    </div >
);

export default App
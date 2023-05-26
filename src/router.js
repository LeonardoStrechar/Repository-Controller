import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/Main/'
import Repositorio from './pages/Repositorio/'
import Error from './pages/Error/error';

export default function Rotas() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/repo" element={<Repositorio />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}

import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Main from './pages/Main/'
import Repositorio from './pages/Repositorio/'

export default function Routes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </Router>
    )
}



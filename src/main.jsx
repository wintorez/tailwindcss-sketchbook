import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import _ from 'lodash'
import { Typography, Forms } from './pages'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container mx-auto p-5">
        <ul className="list-disc list-inside">
          {['typography', 'forms'].map((each) => (
            <li key={each} className="my-1">
              <Link to={`/${each}`} className="text-blue-500">
                {_.capitalize(each)}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="my-5" />
        <Routes>
          <Route path="/" element={<Navigate to="/typography" replace />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)

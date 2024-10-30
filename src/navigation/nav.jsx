import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerViewIndex from '../screens/merchantCustomerView/customerViewIndex'
export default function Nav() {
  return (
    
        <Router>
      <Routes>
        <Route path="/" element={<CustomerViewIndex />} />
        
      </Routes>
    </Router>


  )
}

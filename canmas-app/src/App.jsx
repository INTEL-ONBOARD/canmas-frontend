import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
//import Sidebar from './components/Sidebar';

//route pages
import Register from './Register';

//dashboard route pages
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Faq from './pages/Faq';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Sales from './pages/Sales';
import Settings from './pages/Settings';
import Suppliers from './pages/Suppliers';


import './App.css'

function App() {

  return (
    <Router>
      <div className="app-background">

          <Routes>
          {/*<Route index                   element={<Login/>} />*/}
          <Route path="register"         element={<Register/>} />

            <Route path="/dashboard"        element={<Dashboard />}>
                        <Route path="home"          element={<Home />} />
                        <Route path="clients"       element={<Clients />} />
                        <Route path="faqs"          element={<Faq />} />
                        <Route path="orders"        element={<Orders />} />
                        <Route path="products"      element={<Products />} />
                        <Route path="reports"       element={<Reports />} />
                        <Route path="sales"         element={<Sales />} />
                        <Route path="settings"      element={<Settings />} />
                        <Route path="suppliers"     element={<Suppliers />} />

                    </Route>

          </Routes>

      </div>
    </Router>
  )
}

export default App

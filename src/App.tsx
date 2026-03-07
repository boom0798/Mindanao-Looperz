/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TheLoop from './pages/TheLoop';
import Rides from './pages/Rides';
import ItineraryDetail from './pages/ItineraryDetail';
import Gear from './pages/Gear';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="the-loop" element={<TheLoop />} />
          <Route path="rides" element={<Rides />} />
          <Route path="rides/:id" element={<ItineraryDetail />} />
          <Route path="gear" element={<Gear />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

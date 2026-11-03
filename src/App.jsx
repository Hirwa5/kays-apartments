import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Residents from './pages/Residents';
import Gallery from './pages/Gallery';
import Transport from './pages/Transport';
import Contact from './pages/Contact';

export default function App() {
  return (
    // reducedMotion="user" turns animations off for visitors who ask their device for less motion
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="residents" element={<Residents />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="transport" element={<Transport />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}

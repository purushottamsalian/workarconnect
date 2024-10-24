import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InitialHomePage from './components/InitialHomePage';
import ScrollableHomePage from './components/ScrollableHomePage';
import ServiceProviderPage from './components/ServiceProviderPage';
import SubServicePage from './components/SubServicePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Job from './components/Job'; // Assuming Job component was added
import Contact from './components/Contact'; // Contact component
import About from './components/About'; // About component
import PaymentForm from './components/PaymentForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<InitialHomePage />} />
          <Route path="/home" element={<ScrollableHomePage />} />
          <Route path="/services" element={<ServiceProviderPage />} />
          <Route path="/sub-service/:subServiceId" element={<SubServicePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/job" element={<Job />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/PaymentForm" element={<PaymentForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

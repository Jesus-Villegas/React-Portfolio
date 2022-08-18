// Import all necessary components 
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import React, { useState } from 'react';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Contact from './components/pages/Contact/Contact';
import Resume from './components/pages/Resume/Resume';

// create functional component App that will be rendered to page
function App() {
  // create state for current page
  const [currentPage, setCurrentPage] = useState('Home');

  // create function for spa navigation depending on prop
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <AboutMe />;
  };

  // create function to send as props for changing pages
  const handlePageChange = (page) => setCurrentPage(page);

  // rendering content
  return (
    <div>
      <div className="parallax">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      {/* Header component that is accross all pages */}
      <Header handlePageChange={handlePageChange} currentPage={currentPage}/>
      <body id="body">
        {/* call function that renders pages */}
        {renderPage()}
      </body>
      {/* footer component accross all pages */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
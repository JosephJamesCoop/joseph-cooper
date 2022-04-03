import React, { useState } from 'react';
import Nav from './pages/Nav';
import Contact from './pages/Contact';
import About from './pages/About';
import Work from './pages/MyWork';
import Resume from './pages/Resume';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
    if (currentPage === 'Contact') {
      return <div className='align'> <Contact /></div>;
    }
    if (currentPage === 'Work') {
      return <div className='align'> <Work /></div>;
    }
    if (currentPage === 'Resume') {
      return <div className='align'> <Resume /></div>;
    }
    return <div className='align'> <About /></div>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <><div>
 <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
{renderPage()}
    </div>
    <Footer />
    </>
  );
}

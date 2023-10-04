import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './styles/Error.css';




const Error = () => {
  return (
    <div>
        <header>
            <Navbar />
        </header>

        <aside className='errorSpace'>
            <img src="https://s3.amazonaws.com/passfuel.com/Recuros-passfuel/general/errorPage-img.png" alt="error-img" />
        </aside>

        <footer className='footerError'>
            <Footer />
        </footer>
    </div>

  );
};

export default Error;
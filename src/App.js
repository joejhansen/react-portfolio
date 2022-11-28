// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// importing components
import Header from './components/header/Header'
import About from './components/main/about/About';
import Contact from './components/main/Contact';
import Portfolio from './components/main/portfolio/Portfolio';
import Resume from './components/main/Resume';
import Footer from './components/footer/Footer'

import { useState } from 'react';

function App() {
  const styles = {
    main: {
      flex: '1 0 auto',
    },
    body: {
      // something i tried for the background, kinda looks cool but eh
      // backgroundSize: `22px 22px`,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      mindWidth: '100vw'
    },
    pageHeader: {
      display: 'flex',
      justifyContent: 'center',
      margin: '1rem',
      color: 'red',
      fontSize: '2rem'
    }
  }
  const [page, changePage] = useState('About')

  const currentPage = () => {
    switch (page) {
      case 'About':
        return <About />
      case 'Contact':
        return <Contact />
      case 'Portfolio':
        return <Portfolio />
      case 'Resume':
        return <Resume />
      default:
        return <About />;
    }
  }

  const handlePageChange = (event) => {
    event.preventDefault()
    changePage(event.target.textContent)
  };

  return (
    <div className="bg-dark text-light" style={styles.body}>
      <Header handlePageChange={handlePageChange} activePage={page} />
      <main className='container' style={styles.main}>
        <p style={styles.pageHeader}>{page}</p>
        {currentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

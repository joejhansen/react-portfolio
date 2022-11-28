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

let savedTheme = parseInt(localStorage.getItem('savedTheme'))
if (!savedTheme) {
  localStorage.setItem('savedTheme', '0')
  savedTheme = 0
}

function App() {
  const themes = [
    {
      // funky green
      primary: '#A3B4A2',
      secondary: '#38686A',
      tertiary: '#D47395',
      accent: '#44A5DA',
      text: '#CDC6AE',
    },
    {
      // soft pastel
      primary: '#D7D9B1',
      secondary: '#827191',
      tertiary: '#84ACCE',
      accent: '#84ACCE',
      text: '#D7D9B1',
    },
    {
      // dark
      // generously provided by google
      primary: '#303134',
      secondary: '#202124',
      tertiary: '#303134',
      accent: '#8ab4f8',
      text: '#bdc1c6',
    },
    {
      // ukraine
      primary: '#ffcc00',
      secondary: '#0066cc',
      tertiary: '#E0B400',
      accent: '#44A5DA',
      text: 'white',
    },
    {
      // pride
      primary: '#2D82B7',
      secondary: '#EB8A90',
      tertiary: '#B86B28',
      accent: '#F3DFBF',
      text: '#251200',
    },
    // it's nice but not necessary
    // {
    //   primary: '#706c61',
    //   secondary: '#2A2B2A',
    //   tertiary: '#8F2100',
    //   accent: '#D71D4C',
    //   text: '#F8F4E3',
    // },
    // same with this one
    // {
    //   primary: '#3E7CB1',
    //   secondary: '#81A4CD',
    //   tertiary: '#8F2100',
    //   accent: '#F17300',
    //   text: 'black',
    // },
    // this works fine but is not... nice to look at
    // {
    //   primary: randomColor(),
    //   secondary: randomColor(),
    //   tertiary: randomColor(),
    //   accent: randomColor(),
    //   text: randomColor(),
    // },
  ]
  const [currentTheme, changeTheme] = useState(savedTheme)
  const changeThemeHandler = (e) => {
    e.preventDefault()
    if (currentTheme === themes.length - 1) {
      localStorage.setItem('savedTheme', '0')
      return changeTheme(0)
    } else {
      let current = currentTheme
      localStorage.setItem('savedTheme', current + 1)
      return changeTheme(current + 1)
    }

  }
  const styles = {
    main: {
      flex: '1 0 auto',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      mindWidth: '100vw',
      backgroundColor: themes[currentTheme].primary
    },
    pageHeader: {
      display: 'flex',
      justifyContent: 'center',
      margin: '1rem',
      color: themes[currentTheme].accent,
      fontSize: '2rem'
    }
  }
  const [page, changePage] = useState('About')

  const currentPage = () => {
    switch (page) {
      case 'About':
        return <About theme={themes[currentTheme]} />
      case 'Contact':
        return <Contact theme={themes[currentTheme]} />
      case 'Portfolio':
        return <Portfolio theme={themes[currentTheme]} />
      case 'Resume':
        return <Resume theme={themes[currentTheme]} />
      default:
        return <About theme={themes[currentTheme]} />;
    }
  }

  const handlePageChange = (event) => {
    event.preventDefault()
    changePage(event.target.textContent)
  };

  return (
    <div className="text-light" style={styles.body}>
      <Header handlePageChange={handlePageChange} activePage={page} theme={themes[currentTheme]} />
      <main className='container' style={styles.main}>
        <p style={styles.pageHeader}>{page}</p>
        {currentPage()}
      </main>
      <Footer theme={themes[currentTheme]} changeThemeHandler={changeThemeHandler} />
    </div>
  );
}

export default App;

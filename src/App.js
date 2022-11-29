// "judge not, lest ye be judged"

// importing custom css and bootstrap
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// importing components
import Header from './components/header/Header'
import About from './components/main/about/About';
import Contact from './components/main/contact/Contact';
import Portfolio from './components/main/portfolio/Portfolio';
import Resume from './components/main/resume/Resume';
import Footer from './components/footer/Footer'

import { useState } from 'react';

// pretty themes
const themes = [
  {
    // dark
    // generously provided by google
    primary: '#303134',
    secondary: '#202124',
    tertiary: '#303134',
    accent: '#f88a8a',
    text: '#bdc1c6',
  },
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
  // {
  //   pride
  //   primary: '#e2d4b7ff',
  //   secondary: '#9c9583ff',
  //   tertiary: '#a1a499ff',
  //   accent: '#b0bbbfff',
  //   text: '#cadbc8ff', //b0bbbfff
  // },
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

// checks if there's any saved theme data in localstorage
let savedTheme = parseInt(localStorage.getItem('savedTheme'))
// if not, set's both the variable and the localstorage to be 0
// also put in if the savedtheme is somehow greater than the current length, like if i had shortened it for some reason
if (!savedTheme || savedTheme > themes.length) {
  localStorage.setItem('savedTheme', '0')
  savedTheme = 0
}
function App() {
  // default will be whatever's saved or the default at themes[0]
  const [currentTheme, changeTheme] = useState(savedTheme)
  const changeThemeHandler = (e) => {
    e.preventDefault()
    if (currentTheme < themes.length - 1) {
      let current = currentTheme
      // saves the new/next theme in local storage
      localStorage.setItem('savedTheme', current + 1)
      // changes the theme to the next one in the themes array
      return changeTheme(current + 1)
    } else {
      // saves the first theme in local storage. card coded to 0 because i couldn't think of a reason why not
      localStorage.setItem('savedTheme', '0')
      // resets theme to the 0 position in themes array
      return changeTheme(0)
    }

  }
  const styles = {
    main: {
      flex: '1 0 auto',
    },
    // this is in order to fill the entire viewport even if the main content isn't that big
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
  // which 'page' are you on right now? defaults to About
  const [page, changePage] = useState('About')
  // handles page changer
  const handlePageChange = (event) => {
    // this is super simple compared to the switch case below
    event.preventDefault()
    changePage(event.target.textContent)
  };
  // handles the actual content of the page changing
  const currentPage = () => {
    // if only there was a way to put variable names as component names
    switch (page) {
      case 'About':
        // gotta get the themes through somehow
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
  return (
    <div className="text-light" style={styles.body}>
      {/* drilling the handlepagechange and theme into the header */}
      <Header handlePageChange={handlePageChange} activePage={page} theme={themes[currentTheme]} />
      <main className='container' style={styles.main}>
        <p style={styles.pageHeader}>{page}</p>
        {currentPage()}
      </main>
      {/* drilling the handlethemechange and theme into the footer */}
      <Footer theme={themes[currentTheme]} changeThemeHandler={changeThemeHandler} />
    </div>
  );
}

export default App;

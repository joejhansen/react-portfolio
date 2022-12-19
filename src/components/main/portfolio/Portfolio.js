// import { useState } from "react"
import Project from "./Project"
import Courier from "../../../images/courierapp.png"
import NetflixNGrill from "../../../images/netflixandgrill.png"
import RegexPrimer from "../../../images/regexprimer.png"
import RNGWords from "../../../images/rngwords.png"
import FirstPortfolio from "../../../images/firstportfolio.png"
import TeamGenerator from "../../../images/teamgenerator.png"
import OptionSelect from "../../../images/optionSelectImage.png"



function Portfolio(props) {

    // const [currentContent, changeContent] = useState('Web')

    // const renderContent = () => {
    //     switch (currentContent) {
    //         case 'Web':
    //             return <></>        
    //         default:
    //             break;
    //     }
    // }

    const projects = [
        {
            title: 'Option Select Database',
            image: OptionSelect,
            imageAlt: 'Option Select React Web App',
            dateCreated: '11/30/22',
            githubURL: 'https://github.com/joejhansen/option-select-db',
            deployedURL: 'https://option-select-db.herokuapp.com/',
            members: [],
            description: 'Upload and analyze your fighting game replays with Slippi-JS',
        },
        {
            title: 'Courier',
            image: Courier,
            imageAlt: 'Courier Share Web Application',
            dateCreated: '10/6/22',
            githubURL: 'https://github.com/joejhansen/courier-app/tree/production',
            deployedURL: '',
            members: [
                'Clay',
                'Inna',
                'Lulu',
                'Joseph Hansen',
            ],
            description: 'Create and share stories within an opensource ecosystem.',
        },
        {
            title: 'Netflix & Grill',
            image: NetflixNGrill,
            imageAlt: 'Netflix & Grill Web Application',
            dateCreated: '8/11/22',
            githubURL: 'https://github.com/joejhansen/netflix-and-grill',
            deployedURL: 'https://joejhansen.github.io/netflix-and-grill/',
            members: [
                'Armando',
                'Roberto',
                'Joseph Hansen',
            ],
            description: 'Let the web app decide dinner and a movie for your next date night.',
        },
        {
            title: 'Gist: Regex Primer',
            image: RegexPrimer,
            imageAlt: 'Regex Primer GitHub Gist',
            dateCreated: '11/3/22',
            githubURL: 'https://gist.github.com/joejhansen/29d148f7c001e1d4ed1e035d4f100db5',
            deployedURL: '',
            members: [],
            description: 'A gist introducing Regex to the unwashed masses.',
        },
        {
            title: '"Random" Word Generator',
            image: RNGWords,
            imageAlt: '"Random" Word Generator Web Application',
            dateCreated: '11/3/22',
            githubURL: 'https://github.com/joejhansen/random-word-generator',
            deployedURL: 'https://joejhansen.github.io/random-word-generator/',
            members: [],
            description: 'Built for a comedian friend of mine who wanted to load in prompts and then ramdonly pick them for improv.',
        },
        {
            title: 'HTML Team Generator',
            image: TeamGenerator,
            imageAlt: 'HTML Team Generator NodeJS Application',
            dateCreated: '9/14/22',
            githubURL: 'https://github.com/joejhansen/challenge-10-team-generator',
            deployedURL: '',
            members: [],
            description: 'Quickly build an HTML page with your project teams information using Inquirer powered by Node.',
        },
        {
            title: 'Static HTML Portfolio',
            image: FirstPortfolio,
            imageAlt: `A Static HTML Portfolio Page`,
            dateCreated: '6/18/22',
            githubURL: 'https://github.com/joejhansen/challenge-2-portfolio',
            deployedURL: 'https://joejhansen.github.io/challenge-2-portfolio/',
            members: [],
            description: `The first "full" webpage I'd ever made. Six months later and now I'm working with PWA's like React.`,
        },
    ]

    return (
        <div className='row'>
                {projects.map((project, index) => {
                    return <Project key={index} project={project} theme={props.theme}/>
                })}
        </div>
    )
}

export default Portfolio
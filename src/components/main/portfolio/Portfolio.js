// import { useState } from "react"
import Project from "./Project"

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
            title: 'Courier',
            image: '',
            imageAlt: '',
            dateCreated: '2/2/2',
            githubURL: 'https://github.com/joejhansen/courier-app/tree/production',
            deployedURL: '',
            members: [
                'Clay',
                'Inna',
                'Lulu',
                'Joseph Hansen',
            ],
            description: 'Create and share stories within an opensource ecosystem',
        },
        {
            title: 'Netflix and Grill',
            image: '',
            imageAlt: '',
            dateCreated: '1/1/1',
            githubURL: 'https://github.com/joejhansen/netflix-and-grill',
            deployedURL: 'https://joejhansen.github.io/netflix-and-grill/',
            members: [
                'Armando',
                'Roberto',
                'Joseph Hansen',
            ],
            description: 'Let the web app decide dinner and a movie for your next date night',
        },
        {
            title: 'Gist: Regex Primer',
            image: '',
            imageAlt: '',
            dateCreated: '11/3/22',
            githubURL: 'https://gist.github.com/joejhansen/29d148f7c001e1d4ed1e035d4f100db5',
            deployedURL: '',
            members: [],
            description: 'A gist introducing Regex to the unwashed masses',
        },
        {
            title: '"Random" Word Generator',
            image: '',
            imageAlt: '',
            dateCreated: '11/3/22',
            githubURL: 'https://github.com/joejhansen/random-word-generator',
            deployedURL: 'https://joejhansen.github.io/random-word-generator/',
            members: [],
            description: 'Built for a comedian friend of mine who wanted to load in prompts and then ramdonly pick them for improv',
        },
        {
            title: 'HTML Team Generator',
            image: '',
            imageAlt: '',
            dateCreated: '9/14/22',
            githubURL: 'https://github.com/joejhansen/challenge-10-team-generator',
            deployedURL: '',
            members: [],
            description: 'Quickly build an HTML page with your project teams information using Inquirer powered by Node',
        },
    ]

    return (
        <div className='row'>
                {projects.map((project, index) => {
                    return <Project key={index} project={project} />
                })}
        </div>
    )
}

export default Portfolio
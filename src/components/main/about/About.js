import { useState } from "react"
import InnerContent from "./InnerContent"
import Portrait from "../../../portrait.png"

function About(props) {

    const styles = {
        aboutBorder: {
            border: 'solid gray 1px',
            borderRadius: '1rem',
            margin: '1rem',
            display: 'flex',
            flexDirection: 'row'
        },
        contentOptions: {
            listStyleType: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: '.5rem'
        },
        imgBox:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        },
        img: {
            borderRadius: '1rem',
            margin: '1rem 0',
            // objectFit: 'cover',
            width: '100%',
            // minWidth: '336px',
            height: 'auto',
            // minHeight: '248px'
        },
        active: {
            color: 'red',
            textDecoration: 'none',
            hover: 'grab'
        },
        inactive: {
            color: 'white',
            textDecoration: 'none'
        }
    }
    const [activeContent, changeContent] = useState('Intro')

    const handleContentChange = (e) => {
        e.preventDefault()
        changeContent(e.target.id)
    }

    const contents = [
        {
            title: 'Intro',
            main: 'I wear many hats from screenwriter to web developer to marketing guru.',
            sub: `With a BA in Screenwriting and professional experience in film and advertising, I've developed communcation skills that transcend mediums and get to the heart of what a consumer or audience wants.`,
            tag: `Whether it's the copy in your organization's press releases, your application's user experience, or your feature film's character arcs, I can make an impact.`
        },
        {
            title: 'Web',
            main: `With only a couple months' experience, I've developed production-ready skills in full-stack web development.`,
            sub: 'This website was built entirely in React using dynamically generated components, updating information (such as this content) is as simple as changing the contents in an array.',
            tag: `Explore the site including projects found under the 'Portfolio' section`
        },
        {
            title: 'Film',
            main: `With 3 years of professional experience along with attending Chapman University's Dodge College, I've written 3 feature length scripts and countless shorts.`,
            sub: 'Not only a focused writer, I am a dedicated producer with a record of keeping projects under budget and on time.',
            tag: 'Providing salient editing, proofing, story notes, coverage and more for any genre or format; comedy to horror, shortform to series.'
        },
        {
            title: 'Ad Copy',
            main: `Experience writing for Fortune 500 companies in traditional advertising, crisis PR firms in social media, and 'mom-and-pop' businesses looking for emerging markets.`,
            sub: `I've written copy for print, video, social, and (even) radio, making sure my clients' messages comes across loud and clear no matter what.`,
            tag: `Able to draft and edit any information so that it is compliant with your media platform's regulatory body from Amazon, to Facebook, to the SEC.`
        },
    ]
    const renderContent = () => {
        switch (activeContent) {
            case 'Intro':
                return <InnerContent title={contents[0].title} main={contents[0].main} sub={contents[0].sub} tag={contents[0].tag} />
            case 'Web':
                return <InnerContent title={contents[1].title} main={contents[1].main} sub={contents[1].sub} tag={contents[1].tag} />
            case 'Film':
                return <InnerContent title={contents[2].title} main={contents[2].main} sub={contents[2].sub} tag={contents[2].tag} />
            case 'Ad Copy':
                return <InnerContent title={contents[3].title} main={contents[3].main} sub={contents[3].sub} tag={contents[3].tag} />
            default:
                break;
        }
    }

    return (
        <div className="row bg-dark" style={styles.aboutBorder}>
            <div className="col-md-4" style={styles.imgBox}>
                <img src={Portrait} style={styles.img} alt="Joseph Hansen Portrait"/>
            </div>
            <div className="col-md-8">
                <div className="row">
                    <div className="col" style={styles.contentOptions}>
                        {contents.map((content, index) => {
                            return <a 
                            href={`#${content.title}`}
                            key={index} 
                            id={content.title}
                            onClick={handleContentChange}
                            style={activeContent === content.title ? styles.active : styles.inactive}
                            >{content.title}</a>
                        })}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
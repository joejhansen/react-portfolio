function Resume(props) {
    const styles = {
        card: {
            margin: '0 1rem 1rem 1rem',
            border: 'solid gray 1px',
            borderRadius: '1rem'
            // outline: 'dashed red 1px'
        },
        innerMargin: {
            margin: '1rem'
        }
    }
    const resume = [
        {
            company: 'EDRCSV',
            type: 'Volunteer',
            role: 'Junior Webmaster',
            termStart: '9/22',
            termEnd: '',
            description: `Maintaining and updating The Eating Disorder Resource Center (Silicon Valley) website using WordPress publishing and LAMP stack. Implementing a dynamic search function for service providers using built in mySQL database.`,
            isCurrent: true,
        },
        {
            company: 'UCLA Coding Bootcamp',
            type: 'Student',
            role: 'Student',
            termStart: '6/22',
            termEnd: '',
            description: 'Studying full-stack development through UCLA extension program with edX',
            isCurrent: true,
        },
        {
            company: 'Freelance',
            type: 'Freelance',
            role: 'Writer and Producer',
            termStart: '9/20',
            termEnd: '',
            description: 'Writing and editing scripts and ad-copy on commission along with raising money to produce independent short films in association with Resin Ape and Parallel Films',
            isCurrent: true,
        },
        {
            company: 'Cetera Financial Group',
            type: 'Contract',
            role: 'Copywriter and Proofreader',
            termStart: '3/20',
            termEnd: '9/20',
            description: 'Assessing and editing any public and company facing materials for compliance with mandated SEC regulation',
            isCurrent: false,
        },
    ]

    return (
        <div className="row">
            {resume.map((entry, index) => {
                return (
                    <div key={index} className="col-12">
                        <div className="card bg-dark" style={styles.card}>
                            <div style={styles.innerMargin}>
                                <p>{entry.role} at {entry.company}</p>
                                <p>{entry.termStart}{entry.isCurrent ? ' -' : ` - ${entry.termEnd}`}</p>
                                <p>{entry.description}</p>
                                <p>{entry.isCurrent ? "Current" : ""}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Resume
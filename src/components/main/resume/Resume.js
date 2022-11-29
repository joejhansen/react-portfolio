function Resume(props) {
    const styles = {
        card: {
            margin: '0 1rem 1rem 1rem',
            border: `solid ${props.theme.tertiary} 1px`,
            borderRadius: '1rem',
            backgroundColor: props.theme.secondary,
            color: props.theme.text
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
            company: '',
            type: 'Freelance',
            role: 'Freelance Writer and Producer',
            termStart: '9/20',
            termEnd: '',
            description: 'Writing and editing scripts and ad-copy on commission along with raising money to produce independent short films in association with Resin Ape and Parallel Films',
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
            {resume.map((job, index) => {
                return (
                    <div key={index} className="col-12">
                        <div className="card" style={styles.card}>
                            <div style={styles.innerMargin}>
                                <p>{job.role}{job.company ? ` at ${job.company}`: ``}</p>
                                <p>{job.isCurrent ? "Current" : ""}</p>
                                <p>{job.termStart}{job.isCurrent ? ' -' : ` - ${job.termEnd}`}</p>
                                <p>{job.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Resume
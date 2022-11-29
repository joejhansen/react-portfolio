function Project(props) {
    // looking for props.project.
    // id:
    // title:
    // dateCreated: 
    // githubURL: 
    // members: 
    // description: 
    const styles = {
        card: {
            // outline: 'dashed red 1px',
            margin: '0 1rem 1rem 1rem',
            border: `solid ${props.theme.tertiary} 1px`,
            borderRadius: '1rem',
            backgroundColor: props.theme.secondary,
            color: props.theme.text,
            // minHeight: '740px'
            // position: 'relative',
            // opacity: '99%',
        },
        contentColumn: {
            margin: '0 1rem'
        },
        description: {
        },
        title: {
            textAlign: 'center',
            fontSize: '1.25rem'
        },
        ul: {
            listStyle: 'none'
        },
        members: {

        },
        date: {

        },
        imgBox: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            margin: '1rem'
        },
        columnPadding: {
            padding: "0"
        }
    }

    return (
        <section className='col-sm-12 col-md-6 col-lg-4 col-xl-4' style={styles.columnPadding}>
            <div className="card" style={styles.card}>
                <div style={styles.imgBox}>
                    <img src={props.project.image ? `${props.project.image}` : "https://picsum.photos/200"} style={styles.img} alt={props.project.imageAlt} className="projectImages"></img>
                </div>
                <div className="row">
                    <div className="col">
                        <p style={styles.title}>{props.project.title}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={styles.contentColumn}>
                        <p>{props.project.description}</p>
                        <p>Created: {props.project.dateCreated}</p>
                        <div>
                            {props.project.members.length
                                ?
                                <>
                                    <p>Created by</p>
                                    <ul style={styles.ul}>{props.project.members.map((member) => {
                                        return <li key={member}>{member}</li>
                                    })}</ul>
                                </>
                                : <p>Created by Joseph Hansen</p>}
                        </div>
                        {props.project.deployedURL
                            ? <p>Deployed URL: <a href={props.project.deployedURL} target='_blank' rel="noreferrer">Here</a></p>
                            : <p></p>}
                        <p>GitHub URL: <a href={props.project.githubURL} target='_blank' rel="noreferrer">Here</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
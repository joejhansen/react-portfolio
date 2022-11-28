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
            border: 'solid gray 1px',
            borderRadius: '1rem'
            // position: 'relative',
            // opacity: '99%',
        },
        contentColumn: {
            margin: '0 1rem'
        },
        description: {
        },
        title: {
            textAlign: 'center'
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
            justifyContent: 'center'
        },
        img: {
            borderRadius: '1rem',
            margin: '1rem',
            height: '200px',
            width: '200px',
        },
    }
        
    return (
        <section className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
            <div className="card bg-dark" style={styles.card}>
                <div style={styles.imgBox}>
                <img src="https://picsum.photos/200" style={styles.img} alt={props.project.imageAlt}></img>
                </div>
                <div className="row">
                    <div className="col">
                        <p style={styles.title}>{props.project.title}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={styles.contentColumn}>
                        <p>Created: {props.project.dateCreated}</p>
                        <p>GitHub URL: <a href={props.project.githubURL}>Here</a></p>
                        {props.project.deployedURL
                            ? <p>Deployed URL: <a href={props.project.deployedURL}>Here</a></p>
                            : <p></p>}
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
                        <p>{props.project.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
import Navigation from "./Navigation"

function Header(props) {
    
    // props.activePage and
    // props.handlePageChange

    const styles = {
        name: {
            display: 'flex',
            justifyContent: 'center'
        },
        header: {
            paddingBottom: 'solid black 2px',
            borderBottom: 'solid gray 2px'
        }
    }

    return (
        <header className="container-fluid bg-dark text-light" style={styles.header}>
            <div className="row">
                <div className="col-md-4">
                    <h1 style={styles.name}>Joseph Hansen</h1>
                </div>
                <div className="col-md-8">
                    <Navigation handlePageChange={props.handlePageChange} activePage={props.activePage}/>
                </div>
            </div>
        </header>
    )
}

export default Header
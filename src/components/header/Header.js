import Navigation from "./Navigation"

function Header(props) {

    // props.activePage and
    // props.handlePageChange
    
    const styles = {
        name: {
            textAlign: 'center',
            color: props.theme.text,
        },
        header: {
            borderTop: `solid ${props.theme.secondary} .4rem`,
            borderBottom: `solid ${props.theme.tertiary} .4rem`,
            backgroundColor: props.theme.secondary
        },
        margin: {
            marginBottom: '.4rem'
        }
    }

    return (
        <header className="container-fluid" style={styles.header}>
            <div className="row" style={styles.margin}>
                <div className="col-md-4">
                    <h1 style={styles.name}>Joseph Hansen</h1>
                </div>
                <div className="col-md-8">
                    {/* drilling the handlepagechange into navigation */}
                    <Navigation handlePageChange={props.handlePageChange} activePage={props.activePage} theme={props.theme} />
                </div>
            </div>
        </header>
    )
}

export default Header
function Navigation(props){
    const styles = {
        ul: {
            padding: '0',
            listStyleType: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%'
        },
        li: {
            underline: 'none',
            display: 'flex',
            alignItems: 'center',
            fontSize: '1.25rem'
        },
        active: {
            color: props.theme.accent,
            textDecoration: 'none'
        },
        inactive: {
            color: props.theme.text,
            textDecoration: 'none'
        },
    }

    return(
        <nav className="h-100">
            <ul style={styles.ul}>
                <li style={styles.li}><a href="#about" onClick={props.handlePageChange} style={ props.activePage === 'About' ? styles.active : styles.inactive }>About</a></li>
                <li style={styles.li}><a href="#portfolio" onClick={props.handlePageChange} style={ props.activePage === 'Portfolio' ? styles.active : styles.inactive }>Portfolio</a></li>
                <li style={styles.li}><a href="#contact" onClick={props.handlePageChange} style={ props.activePage === 'Contact' ? styles.active : styles.inactive }>Contact</a></li>
                <li style={styles.li}><a href="#resume" onClick={props.handlePageChange} style={ props.activePage === 'Resume' ? styles.active : styles.inactive }>Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navigation


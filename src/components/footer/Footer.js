function Footer(props){
    // i'll be honest, i probably used display: flex for no reason a couple times but idk which one is the correct one, so
    const styles = {
        ul: {
            marginTop: '.4rem',
            padding: '0',
            listStyleType: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },
        text: {
            textAlign: 'center',
            color: props.theme.text
        },
        footer: {
            display: 'flex',
            alignSelf: 'flex-end',
            flexDirection: 'column',
            borderBottom: `solid ${props.theme.secondary} .4rem`,
            borderTop: `solid ${props.theme.tertiary} .4rem`,
            backgroundColor: props.theme.secondary
        },
        toTop: {
            textDecoration: 'none',
            color: props.theme.text,
        }
    }
    return(
        <footer style={styles.footer} className="container-fluid">
            <ul style={styles.ul}>
                <li onClick={props.changeThemeHandler}><a style={styles.toTop} href='#Theme'>Change Theme</a></li>
                <li><a href="#top" style={styles.toTop}>To Top</a></li>
                {/* using target="_blank" here to go to a new tab, will see throughout site */}
                <li><a style={styles.toTop} href='https://github.com/joejhansen/react-portfolio' target="_blank" rel="noreferrer">Page Source</a></li>
            </ul>
            <ul style={styles.ul}>
                <li><a style={styles.toTop} href="https://github.com/joejhansen" target="_blank" rel="noreferrer">Personal GitHub</a></li>
            </ul>
        </footer>
    )
}

export default Footer
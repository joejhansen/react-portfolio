function Footer(props){
    const styles = {
        ul: {
            marginTop: '.4rem',
            padding: '0',
            listStyleType: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        text: {
            display: 'flex',
            justifyContent: 'center',
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
                <li><a href="#top" style={styles.toTop}>To Top</a></li>
                <li onClick={props.changeThemeHandler}><a style={styles.toTop} href='#Theme'>Change Theme</a></li>
            </ul>
            <p style={styles.text}>Created with React</p>
        </footer>
    )
}

export default Footer
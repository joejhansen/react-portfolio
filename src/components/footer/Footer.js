function Footer(props){
    const styles = {
        ul: {
            padding: '0',
            listStyleType: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        text: {
            display: 'flex',
            justifyContent: 'center'
        },
        footer: {
            display: 'flex',
            alignSelf: 'flex-end',
            flexDirection: 'column',
            borderTop: 'solid gray 2px',
            paddingTop: '1rem'
        },
        toTop: {
            textDecoration: 'none',
            color: 'white',  
        }
    }
    return(
        <footer style={styles.footer} className="container-fluid bg-dark">
            <ul style={styles.ul}>
                <li><a href="#top" style={styles.toTop}>To Top</a></li>
            </ul>
            <p style={styles.text}>Created with React</p>
        </footer>
    )
}

export default Footer
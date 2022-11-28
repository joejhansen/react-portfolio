function InnerContent({ title, main, sub, tag, theme }) {

    const styles = {
        title: {
            fontSize: '1.5rem',
            color: theme.accent,
            marginLeft: '1rem'
        },
        main: {
            color: theme.text
        },
        sub: {
            color: theme.text
        },
        tag: {
            color: theme.text
        },
    }

    return (
        <>
            <p style={styles.title}>{title}</p>
            <p style={styles.main}>{main}</p>
            <p style={styles.sub}>{sub}</p>
            <p style={styles.tag}>{tag}</p>
        </>
    )
}
export default InnerContent
function InnerContent({ title, main, sub, tag }) {

    const styles = {
        title: {
            fontSize: '1.5rem',
            color: 'red'
        },
        main: {},
        sub: {},
        tag: {},
    }

    return (
        <>
            <p style={styles.title}>{title}</p>
            <p>{main}</p>
            <p>{sub}</p>
            <p>{tag}</p>
        </>
    )
}
export default InnerContent
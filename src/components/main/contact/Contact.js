import { useState } from "react"

function Contact(props) {

    const styles = {
        card: {
            border: `solid ${props.theme.tertiary} 1px`,
            borderRadius: '1rem',
            backgroundColor: props.theme.secondary
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'flex-center'
        },
        invalid: {
            border: 'solid red 2px'
        },
        valid: {
            border: 'solid green 2px'
        },
        middleCard: {
            marginTop: '1rem'
        },
        textCenter: {
            textAlign: 'center'
        },
        button: {
            backgroundColor: props.theme.tertiary,
            color: props.theme.text,
            marginTop: '1rem'
        }
    }
    
    // eslint-disable-next-line
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    const [name, nameChange] = useState('')
    const [email, emailChange] = useState('')
    const [message, messageChange] = useState('')
    const [nameIsValid, nameValidChanger] = useState(true)
    const [emailIsValid, emailValidChanger] = useState(true)
    const [messageIsValid, messageValidChanger] = useState(true)

    const handleChange = (e) => {
        switch (e.target.id) {
            case 'name':
                nameChange(e.target.value)
                break;
            case 'email':
                emailChange(e.target.value)
                break;
            case 'message':
                messageChange(e.target.value)
                break;
            default:
                break;
        }
    }

    const validate = (e) => {
        if (e.target.id === 'email') {
            if (!email) {
                emailValidChanger(false)
            }
            if (email.match(emailRegex)) {
                emailValidChanger(true)
            } else {
                emailValidChanger(false)
            }
        } else if (e.target.id === 'name') {
            if (!name) {
                nameValidChanger(false)
            } else {
                nameValidChanger(true)
            }
        } else if (e.target.id === 'message') {
            if (!message) {
                messageValidChanger(false)
            } else {
                messageValidChanger(true)
            }
        }
    }

    const sendMessage = (e) => {
        e.preventDefault()
        const name = e.target.parentNode.children[0].value.trim()
        const email = e.target.parentNode.children[1].value.trim()
        const text = e.target.parentNode.children[2].value.trim()
        if ((nameIsValid && emailIsValid && messageIsValid) && (name && email && text)) {
            return console.table({ name, email, text })
        }
        return console.log(`that ain't right`)
        // a workaround for not having a database or email handler atm
        // window.open(`mailto:josephjameshansen@gmail.com?subject='Website Inquiry'&body='${text}'`)
    }

    return (
        <div className="row" style={styles.middleCard}>
            <div className="column">
                <div className="card" style={styles.card}>
                    <div className="card-body">
                        <p className="card-title" style={styles.textCenter}>Drop a line</p>
                        <form style={styles.form}>
                            <input type="text"
                                placeholder={nameIsValid ? 'name' : 'please provide a valid name'}
                                onChange={handleChange}
                                id='name'
                                className="m-2"
                                onBlur={validate}
                                style={nameIsValid ? styles.valid : styles.invalid}
                            ></input>
                            <input type="email"
                                placeholder={emailIsValid ? 'email' : 'please provide a valid email'}
                                onChange={handleChange}
                                id='email'
                                className="m-2" 
                                onBlur={validate}
                                style={emailIsValid ? styles.valid : styles.invalid}
                            ></input>
                            <input type="text"
                                placeholder='Leave a message'
                                onChange={handleChange}
                                id='message'
                                className="m-2" 
                                onBlur={validate}
                                style={messageIsValid ? styles.valid : styles.invalid}
                            ></input>
                            <button className="btn" type="submit" onClick={sendMessage} style={styles.button}>Contact Me</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
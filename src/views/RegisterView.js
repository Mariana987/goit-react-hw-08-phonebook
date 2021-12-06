import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
// import { Form, Button, Label, Control } from 'react-bootstrap';
import s from './views.module.css';
const styles = {
    form: {
        width: 320,


    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,

    },

};

export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className={s.formContainer}>
            <div className=" row align-items-center py-5 col-xl-5" >
                <h1 className="h3 mb-3 fw-normal">Registration Page</h1>

                <form onSubmit={handleSubmit}
                    style={styles.form}
                    autoComplete="off"
                    className="mb-3"
                >

                    <label style={styles.label} className='label'>
                        Name

                        <input
                            className={s.input}
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange} />
                    </label>

                    <label style={styles.label} className="mb-3">
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            id="floatingInput"
                            onChange={handleChange}
                        />
                        <span className="text-muted"> We'll never share your email with anyone else.</span>
                    </label>

                    <label style={styles.label}
                    >
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}


                        />
                    </label>

                    <button type="submit" className="w-100 btn btn-lg btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
}
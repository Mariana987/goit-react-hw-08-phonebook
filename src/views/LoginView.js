import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import 'bootstrap/dist/css/bootstrap.min.css';
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

export default function LoginView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
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
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div className={s.formContainer}>
            <h1 className="h3 mb-3 fw-normal">LogIn Page</h1>



            <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
                <label style={styles.label}>
                    Email
                    <input
                        className='input-group-text'
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                    <span className="text-muted"> * We'll never share your email with anyone else.</span>
                </label>

                <label style={styles.label}>
                    Password
                    <input
                        className='input-group-text'
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit" className="w-100 btn btn-lg btn-primary">Enter</button>
            </form>
        </div>
    );
}









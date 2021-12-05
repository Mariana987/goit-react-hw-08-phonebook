import { useState } from "react";
import { useDispatch, connect, useSelector } from "react-redux";
import { addContact } from "../../redux/Phonebook/phonebook-operation";
import s from "./Form.module.css";
import shortid from "shortid";

import { getContacts } from "../../redux/Phonebook/selectors";


function Form() {

    const [userName, setName] = useState("");
    const [number, setNumber] = useState("");
    const [active] = useState(false);
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);


    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                console.warn(`Field - ${name} is under constraction`);
                return
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContacts = {
            name: userName,
            number: number,
            id: shortid.generate(),
        };
        if (contacts.find((contact) => contact.name === userName)) {
            alert(`Sorry, ${userName} is already in yours contacts list`);

            reset();
            return
        }


        dispatch(addContact(newContacts));
        reset();
    };

    const reset = () => {
        setName("");
        setNumber("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <label >
                <p>Name:</p>
                <input
                    type="text"
                    id={shortid.generate()}
                    name="name"
                    value={userName}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                    onChange={handleChange}
                    placeholder="Rosie Simpson"
                />
            </label>

            <label >
                <p>Number:</p>
                <input
                    type="tel"
                    id={shortid.generate()}
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    required
                    onChange={handleChange}
                    placeholder="459-12-56"
                />
            </label>
            <button className={s.button} type="submit" disabled={active}>
                Add contact
            </button>
        </form>
    );
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);















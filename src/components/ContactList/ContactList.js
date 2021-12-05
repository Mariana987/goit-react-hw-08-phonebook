
import s from './ContactList.module.css'
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    deleteContact,
    fetchContacts,
} from '../../redux/Phonebook/phonebook-operation';
import Loader from "../Loader/Loader";
import { getLoading } from '../../redux/Phonebook/selectors';

const ContactList = ({ contacts, deleteContact, fetchContactsAll }) => {
    const isLoading = useSelector(getLoading);

    useEffect(() => {
        fetchContactsAll();
    }, [fetchContactsAll]);

    return (
        <>
            <div >
                <ul className={s.list}>
                    {isLoading && <Loader />}
                    {contacts.map(({ id, name, number }) => (
                        <li key={id} className={s.item}>
                            <div><p>{name}</p>
                                <p>{number}</p></div>
                            <div><button
                                className={s.button}
                                type="button"
                                onClick={() => deleteContact(id)}
                            >
                                Delete contact
                            </button></div>


                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
};


const getFilteredContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );
};

const mapStateToProps = ({
    contacts: { contactItems, filter } }) => ({
        contacts: getFilteredContacts(contactItems, filter),
    });

const mapDispatchToProps = dispatch => ({
    deleteContact: id => dispatch(deleteContact(id)),
    fetchContactsAll: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);





























































// import PropTypes from 'prop-types';
// import Contact from '../Contact';

// export default function ContactList({ getVisibleContacts, deleteContact }) {
//     return (
//         <ul>
//             {getVisibleContacts().map(contact => (
//                 <Contact key={contact.id}
//                     contact={contact}
//                     deleteContact={deleteContact} />
//             ))}
//         </ul>
//     );
// }

// ContactList.propTypes = {
//     getVisibleContacts: PropTypes.func,
//     deleteContact: PropTypes.func,
// };
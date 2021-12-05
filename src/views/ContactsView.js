import Form from '../components/Form/Form';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import styles from './views.module.css'

export default function ContactsView() {
    return (
        <div className={styles.container}>
            <h1>Phonebook</h1>
            <Form />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
}

















// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Container from '../components/Container';
// import ContactList from '../components/ContactList/ContactList';
// // import TodoEditor from '../components/TodoEditor';
// import Filter from '../components/Filter/Filter';
// // import Stats from '../components/Stats';
// // import Modal from '../components/Modal';
// // import IconButton from '../components/IconButton';
// // import { ReactComponent as AddIcon } from '../icons/add.svg';
// // import { phonebookOperations, phonebookSelectors } from '../redux/Phonebook'
// // import { getLoading } from '../redux/Phonebook/selectors';
// import { fetchContacts, addContact, deleteContact } from '../redux/Phonebook/phonebook-operation';



// const barStyles = {
//     display: 'flex',
//     alignItems: 'flex-end',
//     marginBottom: 20,
// };

// export default function TodosView(params) {
//     const dispatch = useDispatch();
//     // const isLoadingContacts = useSelector(getLoading);

//     // const [isModalOpen, setIsModalOpen] = useState(false);
//     // const toggleModal = () => setIsModalOpen(state => !state);

//     useEffect(() => dispatch(fetchContacts()), [dispatch]);

//     return (
//         <Container>
//             <div style={barStyles}>
//                 {/* <Filter /> */}
//                 {/* <Stats /> */}
//                 {/* <IconButton onClick={toggleModal} aria-label="Добавить todo">
//                     <AddIcon width="40" height="40" fill="#fff" />
//                 </IconButton> */}

//                 {/* {isLoadingContacts && <h1>Загружаем...</h1>} */}
//             </div>

//             <ContactList />

//             {/* {isModalOpen && (
//                 <Modal onClose={toggleModal}>
//                     <TodoEditor onSave={toggleModal} />
//                 </Modal>
//             )}  */}
//         </Container>
//     );
// }
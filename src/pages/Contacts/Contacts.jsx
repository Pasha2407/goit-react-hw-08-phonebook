import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import css from './Contacts.module.css';

export const Contacts = () => {
  return (
    <div className={css.Container}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

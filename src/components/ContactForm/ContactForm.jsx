import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts.reducer';
import { selectContacts } from 'redux/contacts.selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const inputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    switch (name) {
      case 'name': {
        setName(value);
        return;
      }
      case 'number': {
        setPhone(value);
        return;
      }
      default:
        return;
    }
  };

  const submit = event => {
    const contact = {
      name: name,
      phone: phone,
    };
    event.preventDefault();
    const hasDuplicates = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`"${name}" is already in contacts`);
      return;
    }
    dispatch(addContact(contact));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={submit} className={css.Form}>
      <label>
        <span>Name</span>
        <input type="text" name="name" onChange={inputChange} value={name} />
        <span>Number</span>
        <input type="text" name="number" onChange={inputChange} value={phone} />
      </label>
      <button type="submit">Add contact </button>
    </form>
  );
};

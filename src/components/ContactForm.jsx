import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/contacts.services';
import { selectContacts } from 'redux/contacts/contacts.selectors';
import css from './Form.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
        setNumber(value);
        return;
      }
      default:
        return;
    }
  };

  const submit = event => {
    const formData = {
      name: name,
      number: number,
    };
    event.preventDefault();
    const hasDuplicates = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`"${name}" is already in contacts`);
      return;
    }
    dispatch(addContactThunk(formData));
    setName('');
    setNumber('');
  };

  return (
    <div className={css.Container}>
      <form onSubmit={submit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            onChange={inputChange}
            value={name}
            placeholder="Emilia Clarke"
            required
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="text"
            name="number"
            onChange={inputChange}
            value={number}
            placeholder="+380680000000"
            required
          />
        </label>
        <button type="submit">Add contact </button>
      </form>
    </div>
  );
};

import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contacts.services';
import css from './ContactList.module.css';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.Item}>
      {name}: {number}
      <button
        style={{ marginLeft: '15px' }}
        type="button"
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        <small>Delete</small>
      </button>
    </li>
  );
};

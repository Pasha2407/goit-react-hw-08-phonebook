import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts.reducer';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      <li>
        {name}: {phone}
        <button
          style={{ marginLeft: '15px' }}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </ul>
  );
};

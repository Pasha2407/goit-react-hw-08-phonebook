import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactListItem } from './ContactListItem';
import {
  selectVisibleContacts,
  selectContactsIsLoading,
  selectContactslsError,
} from 'redux/contacts/contacts.selectors';
import { fetchContactsThunk } from 'redux/contacts/contacts.services';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactslsError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={css.List}>
      {isLoading && !error ? (
        <i>Loading...</i>
      ) : (
        contacts.map(item => {
          return <ContactListItem {...item} key={item.id} />;
        })
      )}
    </div>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contacts.selectors';
import { addFilter } from 'redux/contacts/filter.slice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <form className={css.Filter}>
      <label>
        <h2>Contacts</h2>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={event => dispatch(addFilter(event.target.value))}
          placeholder="Search contacts by name"
        ></input>
      </label>
    </form>
  );
};

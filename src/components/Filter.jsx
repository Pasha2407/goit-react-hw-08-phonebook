import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts.selectors';
import { addFilter } from 'redux/filter.reducer';
import css from './Form.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <form className={css.Form}>
      <label>
        <span>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={event => dispatch(addFilter(event.target.value))}
        ></input>
      </label>
    </form>
  );
};

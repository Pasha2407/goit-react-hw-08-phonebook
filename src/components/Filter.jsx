import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts.selectors';
import { addFilter } from 'redux/filter.reducer';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <form>
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

import { useDispatch, useSelector } from 'react-redux';
import { FilterBox, FilterInput, FilterLabel } from './Filter.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = query => dispatch(setFilter(query.toLowerCase()));

  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        value={filter}
        onChange={evt => handleFilterChange(evt.target.value)}
      />
    </FilterBox>
  );
};

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  // FormControl,
  // FormLabel,
  Input,
  // Button,
  // FormErrorMessage,
} from '@chakra-ui/react';
import { updateFilter } from '../../redux/contacts/slice';
import { getFilter } from '../../redux/contacts/selectors';
import css from './Filter.module.css';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFieldFilter = e => dispatch(updateFilter(e.currentTarget.value));

  return (
    <div className={css.filterWrapper}>
      <label className={css.label}>
        <p className={css.text}>Find contacts by name</p>
        <Input
          // className={css.Input}
          type="text"
          value={filter}
          onChange={changeFieldFilter}
        />
      </label>
    </div>
  );
}

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
};

export default Filter;

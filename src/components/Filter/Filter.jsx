import PropTypes from 'prop-types';

export function Filter({ value, onSearch }) {
  return (
    <div>
      <p>Find contacts by name:</p>
      <input type="text" name="filterTerm" value={value} onChange={onSearch} />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

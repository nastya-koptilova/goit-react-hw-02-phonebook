import PropTypes from 'prop-types';

export function Contacts({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ name, id, tel }) => {
        return (
          <li key={id}>
            <p>
              {name}: {tel}
            </p>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

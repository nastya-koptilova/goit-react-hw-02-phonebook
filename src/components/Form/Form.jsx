import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    tel: '',
  };

  onNameChange = event => {
    const name = event.target.value;
    this.setState({ name: name });
  };

  onTelChange = event => {
    const tel = event.target.value;
    this.setState({ tel: tel });
  };

  onAddClick = event => {
    event.preventDefault();

    const contact = {
      name: this.state.name,
      tel: this.state.tel,
    };

    const name = contact.name;

    this.props.onAddContact(contact, name);

    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      tel: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.onAddClick}>
        <label className="input-group">
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onNameChange}
            value={this.state.name}
          />
          <span>Nubmer</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.tel}
            onChange={this.onTelChange}
          />
        </label>
        <button type="submit">Add contsct</button>
      </form>
    );
  }
}

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

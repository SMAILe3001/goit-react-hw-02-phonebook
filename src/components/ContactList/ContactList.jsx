import { Component } from 'react';

export class ContactList extends Component {
  state = {
    contacts: this.props.contactList,
  };

  render() {
    return (
      <section>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </section>
    );
  }
}

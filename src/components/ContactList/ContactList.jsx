import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactList extends Component {
  state = {
    contacts: this.props.contactList,
  };

  render() {
    return (
      <section>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={nanoid()}>{contact.name}</li>
          ))}
        </ul>
      </section>
    );
  }
}

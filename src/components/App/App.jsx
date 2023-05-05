import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import contactListDemo from '../../data/contactsList';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: contactListDemo,
    filter: '',
  };

  sabmitForm = e => {
    const { contacts } = this.state;
    const { name } = e;

    const normalizedFilter = name.toLowerCase();
    const contactСheck = contacts.every(
      contact => contact.name.toLowerCase() !== normalizedFilter
    );

    contactСheck ? this.addContact(e) : this.alarmDuplicatioContact(name);
  };

  addContact = data => {
    const contact = { id: nanoid(), ...data };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  alarmDuplicatioContact = name => {
    alert(`Rosei ${name} is already in contacts.`);
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.sabmitForm} />
          <h2>Contacts</h2>
          <Filter onChange={this.filterContacts} value={filter} />
          <ContactList
            contactList={this.getVisibleContact()}
            onDeleted={this.deleteContact}
          />
        </div>
      </Container>
    );
  }
}

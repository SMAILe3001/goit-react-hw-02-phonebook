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
  };

  addContact = data => {
    const contact = { id: nanoid(), ...data };

    let ffd = this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));

    console.log(ffd);
  };

  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <Filter />
          <ContactList contactList={this.state.contacts} />
        </div>
      </Container>
    );
  }
}

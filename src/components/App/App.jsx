import { Component } from 'react';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import contactListDemo from '../../data/contactsList';
import { Container } from './App.styled';
export class App extends Component {
  state = {
    contacts: contactListDemo,
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />
          <h2>Contacts</h2>
          <Filter />
          <ContactList contactList={this.state.contacts} />
        </div>
      </Container>
    );
  }
}

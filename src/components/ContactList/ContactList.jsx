import { List, Item } from './ContactList.styled';

export function ContactList({ contactList }) {
  return (
    <section>
      <List>
        {contactList.map(contact => (
          <Item key={contact.id}>
            <span>
              {contact.name}: {contact.number}
              <button type="button">delete</button>
            </span>
          </Item>
        ))}
      </List>
    </section>
  );
}

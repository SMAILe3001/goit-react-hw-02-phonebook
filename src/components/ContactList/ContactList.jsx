import { List, Item, Button } from './ContactList.styled';

export function ContactList({ contactList, onDeleted }) {
  return (
    <List>
      {contactList.map(contact => (
        <Item key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <Button type="button" onClick={() => onDeleted(contact.id)}>
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
}

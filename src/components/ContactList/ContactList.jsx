export function ContactList({ contactList }) {
  return (
    <section>
      <ul>
        {contactList.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    </section>
  );
}

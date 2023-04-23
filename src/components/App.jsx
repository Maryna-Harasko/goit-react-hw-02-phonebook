import React, {Component} from "react";
import { FormContact } from "./FormContact/FormContact";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid';
import { ContactList } from "./ContactList/ContactList";
import { Container, TitleOne, TitleTwo } from "./App.styled";

const initialStates =  
[
  {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
  {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
  {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
  {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
];

export class App extends Component {

  state = {
    contacts: initialStates,
    filter: '',
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }

  listenerForm = (data) => {
    const {contacts} = this.state
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
    if(isExist){
      alert(`${data.name} is already in contacts.`)
      return
    }
      this.setState((prevState) => ({
        contacts: [ {...data, id: nanoid()}, ...prevState.contacts],
    }));
  };

  changeFilter = (event) =>{
    this.setState({filter: event.currentTarget.value})
  }

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase()
    return this.state.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter))
  }
  
  render (){
    const filteredContacts = this.getVisibleContacts();
    return (
      <Container>
        <TitleOne>Phonebook</TitleOne>
        <FormContact onSubmit={this.listenerForm}/>
        <Filter value={this.filter} onChange={this.changeFilter}/>
          <TitleTwo>Contacts</TitleTwo>
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
      </Container>
    );
  };
};

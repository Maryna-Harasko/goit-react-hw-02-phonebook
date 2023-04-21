import React, {Component} from "react";
import { FormContact } from "./FormContact/FormContact";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid';

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

  listenerForm = (data) => {
    const newContact = { id:nanoid(), name: data.name, number: data.number };
    this.setState((prevState) => ({
      contacts: [ newContact, ...prevState.contacts],
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
      <div>
        <FormContact onSubmit={this.listenerForm}/>
        <Filter value={this.filter} onChange={this.changeFilter}/>
        <div>
          <h2>Contacts</h2>
          <ul>
          {filteredContacts.map((contact, id) => (
            <li key={id}>{contact.name}: {contact.number}</li>
          ))}
        </ul>
        </div>
      </div>
    );
  };
};

import React, {Component} from "react";
import { FormContact } from "./FormContact/FormContact";

export class App extends Component {
  state = {
    contacts: [],
  }

  listenerForm = (data) => {
    const newContact = { name: data.name, number: data.number };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render (){
    return (
      <div>
        <FormContact onSubmit={this.listenerForm}/>
        <div>
          <h2>Contacts</h2>
          <ul>
          {this.state.contacts.map((contact, index) => (
            <li key={index}>{contact.name}: {contact.number}</li>
          ))}
        </ul>
        </div>
      </div>
    );
  };
};

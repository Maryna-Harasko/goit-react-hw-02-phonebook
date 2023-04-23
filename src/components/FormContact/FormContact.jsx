import React, {Component} from "react";
import { FormContainer, FormEl, FormLabel, FormInput, FormButton } from "./FormContact.styled";

export class FormContact extends Component {
  state = {
    name: '',
    number: '',
  }

  handleContactChange = (event) =>{
    const {name, value} = event.currentTarget;
    this.setState({[name]: value});
  }

  handleSubmit = e =>{
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({  name: '', number: ''});
  }

  render(){
  return (
    <FormContainer>
      <FormEl onSubmit={this.handleSubmit}>
          <FormLabel>
            Name <FormInput
              type="text"
              name="name"
              placeholder="Please enter name"
              value={this.state.name}
              onChange={this.handleContactChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormLabel>
            Number <FormInput
              type="tel"
              name="number"
              placeholder="Please enter number"
              value={this.state.number}
              onChange={this.handleContactChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
          <FormButton type='submit'>Add contact</FormButton>
        </FormEl>
    </FormContainer>
  )
  }
}
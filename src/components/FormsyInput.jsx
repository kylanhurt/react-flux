import React, { Component } from 'react'
import Formsy, {Form} from 'formsy-react'

const FormsyInput = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue(event) {
    this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
  },

  saveEntityInfo() {

  },

  submitNewEntity(){

  },

  enablePreSubmitButton() {
    this.setState({
      canPreSubmit: true
    });
  },

  disablePreSubmitButton() {
    this.setState({
      canPreSubmit: false
    });
  },

  enableSubmitButton() {
    this.setState({
      canSubmit: true
    });
  },

  disableSubmitButton() {
    this.setState({
      canSubmit: false
    });
  },

  submit(model) {
    someDep.saveEmail(model.email);
  },

 componentWillMount() {
       
  },


  componentDidMount(){

  },

  componentWillUnmount() {

  },

  _onChange() {

  },

  render() {

    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    const className = 'form-group' + (this.props.className || ' ') +
      (this.showRequired() ? 'required' : this.showError() ? 'error' : '');

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage();

    return (
      <div className={className}>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <input
          type={this.props.type || 'text'}
          name={this.props.name}
          onChange={this.changeValue}
          value={this.getValue()}
          checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
        />
        <span className='validation-error'>{errorMessage}</span>
      </div>
    );
  }
});

export default FormsyInput;
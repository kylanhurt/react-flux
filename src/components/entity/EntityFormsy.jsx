import React, { Component } from 'react'
import Formsy, {Form} from 'formsy-react'
import FormsyInput from '../FormsyInput'

export default class EntityFormsy extends React.Component {
  constructor( props ) {
    super(props);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);   
    this.enablePreSubmitButton = this.enablePreSubmitButton.bind(this);
    this.disablePreSubmitButton = this.disablePreSubmitButton.bind(this);   
    this.enableSubmitButton = this.enableSubmitButton.bind(this);
    this.disableSubmitButton = this.disableSubmitButton.bind(this);       
    this.submitNewEntity = this.submitNewEntity.bind(this);     
    this.state = {
     entityNew: {},
       canSubmit: false,
       canPreSubmit: false,
       preSubmitData: {
          valid: false
       }
    }
    console.log('in entityformsy, this is: ', this)
  }

  submit(data) {
    alert(JSON.stringify(data, null, 4));
  }
  enableButton() {
    this.state.canSubmit = true;
  }
  disableButton() {
    this.state.canSubmit = false;
  }

  saveEntityInfo() {

  }

  submitNewEntity(){

  }

  enablePreSubmitButton() {
    this.state.canPreSubmit = true
  }

  disablePreSubmitButton() {
    this.state.canPreSubmit = false
  }

  enableSubmitButton() {
    this.state.canSubmit = true
  }

  disableSubmitButton() {
    this.state.canSubmit = false
  }    

  submit(model) {
    someDep.saveEmail(model.email);
  }

 componentWillMount() {
       
  }


  componentDidMount(){

  }

  componentWillUnmount() {

  }

  _onChange() {

  }

  render() {
    return (
      <div className="main-form" style={{clear: "both"}}>
        <h2>Entity Submission</h2>
        <p>To start the creation and submission of a new entity, please fill out the form below:</p>
        <Formsy.Form onSubmit={this.submit} onValid={this.enableSubmitButton} onInvalid={this.disableSubmitButton} className="main-form" style={{clear: "both"}}>
          <label htmlFor="entityName">Entity Name:</label>
          <FormsyInput name="entityName" type="text" validations="isAlphanumeric" validationError="Entity names should contain only alphanumeric characters." className="form-control " required/>
          <button type="submit" className="btn btn-success" onClick={this.submitNewEntity()} disabled={this.state.canPreSubmit ? ' ' : 'disabled'}>Submit New Entity</button>            
          <button type="submit" className={"btn btn-info " + (this.state.canSubmit ? '' : 'hidden')} to="">Skip this Step</button>       

          {this.state.entityNew.preApproved ? (
          <div>
            <div className="subsequent-entity-info-submission">
                <h2>Additional Info:</h2>
                <div className="form-group">
                    <label htmlFor="entityWebsite">Official Website:</label>
                    <input className="form-control input-small" name="entityWebsite" placeholder="ex. www.MyCompany.com" type="url"></input>
                    <div className="form-messages-wrap">
                        <div>
                            <span className="help-block"></span><br></br>
                            <label className="text-danger">The URL you have entered is not valid. Please try again.</label>
                        </div>
                    </div>                
                </div>
                <div className="form-group">
                    <label htmlFor="entityDescription">A Short Description of the Entity: (max 500 characters)</label>
                    <textarea className="form-control span6" name="entityDescription" placeholder="This organization does ..."></textarea>
                    <div className="form-messages-wrap">
                        <div>
                            <span className="help-block"></span><br></br>
                            <label className="text-danger">This field is required</label>
                        </div>
                    </div>                
                </div>            
                <div className="form-group">
                    <label htmlFor="entityYearFounded">Year Founded:</label><br></br>
                    <input className="form-control" name="entityYearFounded" type="number" max="2016" placeholder="ex. 1956"></input>
                    <div className="form-messages-wrap">
                        <div>
                            <span className="help-block"></span><br></br>
                            <label className="text-danger">This field...</label>
                        </div>
                    </div>                
                </div>
                <div className="form-group">
                    <label htmlFor="entityCountryOrigin">Country of Origin:</label><br></br>
                    <country-select className="form-control span6" name="entityCountryOrigin" cs-priorities="US"></country-select>
                    <div className="form-messages-wrap">
                        <div>
                            <span className="help-block"></span><br></br>
                            <label className="text-danger">This field...</label>
                        </div>
                    </div>                
                </div>
                <div className="form-group">
                    <label htmlFor="entityIndustry">Industry:</label>
                    <input className="form-control" name="entityIndustry" placeholder="ex. Information Technology"></input>
                    <div className="form-messages-wrap">
                        <div>
                            <span className="help-block"></span><br></br>
                            <label className="text-danger">This field...</label>
                        </div>
                    </div>                
                </div>            
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.saveEntityInfo()}>Save</button>
          </div>
          ) : (
            <div></div>
          )}

        </Formsy.Form>
      </div>
    );
  }
};

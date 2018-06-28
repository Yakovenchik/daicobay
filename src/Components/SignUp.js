import React, {Component} from 'react';
import {auth} from '../firebase';
import {Button, Modal, Input, InputGroup, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

const INITIAL_STATE = {
  email: '',
  password: '',
  signIn: false
};


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

export default class SignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      ...INITIAL_STATE
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  onSubmitSignUp = (event) => {
    const {
      email,
      password,
    } = this.state;

    auth.doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        this.toggle();
      });
    event.preventDefault();
  };

  render() {
    return(
      <div>
        <Button className="btn btn-lg btn-primary mb-3 mb-md-0 mr-md-3 airdrop" onClick={this.toggle} > Register for airdrop</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
          <ModalBody>
            <InputGroup>
              <Input onChange={event => this.setState(byPropKey('email', event.target.value))} placeholder='Email'/>
              <Input onChange={event => this.setState(byPropKey('password', event.target.value))} placeholder='Password'/>
            </InputGroup>
          </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={this.onSubmitSignUp}>Sign Up</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
import React, { Component } from 'react';
import {auth} from '../firebase';
import {Button, Modal, Input, InputGroup, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

const INITIAL_STATE = {
  email: '',
  password: '',
  signIn: false
};

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      ...INITIAL_STATE
    };

    this.toggle = this.toggle.bind(this);
  }

  doSignOut = (event) => {
    auth.doSignOut()
      .then(authUser => {
        this.setState({'signIn': false});
      });
    event.preventDefault();
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onSubmitSignIn = (event) => {
    const {
      email,
      password,
    } = this.state;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({...INITIAL_STATE, 'signIn': true, 'currentEmail': this.state.email});
        this.toggle();
      });

    event.preventDefault();
  };

  render() {
    const {signIn, currentEmail} = this.state;
    return (
      <div className='auth'>
      <div>
        {!signIn ? <Button className="btn btn-lg btn-primary mb-3 mb-md-0 mr-md-3 airdrop"
                onClick={this.toggle}> SignIn</Button> : <div className="btn btn-lg btn-primary mb-3 mb-md-0 mr-md-3 airdrop">{currentEmail}</div>}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
          <ModalBody>
            <InputGroup>
              <Input onChange={event => this.setState({'email': event.target.value})}
                     placeholder='Email'/>
              <Input onChange={event => this.setState({'password': event.target.value})}
                     placeholder='Password'/>
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSubmitSignIn}>Sign
              In</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button
          className='btn btn-lg btn-primary mb-3 mb-md-0 mr-md-3 airdrop'
          onClick={this.doSignOut}
        >
          Sign Out
        </Button>
      </div>
    </div>

    )
  }
}
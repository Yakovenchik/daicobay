import React, { Component } from 'react';
import './App.css';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import {ListGroupItem, ListGroup} from 'reactstrap'

class App extends Component {
  render() {
    return (
     <header>
       <SignIn />
       <h1>DAICOBAY <br/> <small>ICO platform powered with game theory</small></h1>
       <SignUp />
       <ListGroup className='list'>
         <ListGroupItem>
           DAICOBAY is platform where team can raise funds and investor can contribute in projects they like. Risks are balanced among all participants.
         </ListGroupItem  >
         <ListGroupItem>What is DAICO?  DAICO - Distributed Autonomous Initial Coin Offering</ListGroupItem>
         <ListGroupItem>
           BAY - ERC20 platform token with fixed supply which is used for contributions
         </ListGroupItem>
       </ListGroup>
       <h3 className='list'>Token Structure</h3>
       <ListGroup className='list'>
         <ListGroupItem>5% team</ListGroupItem>
         <ListGroupItem>45% airdrop & bounty & advisors & development</ListGroupItem>
         <ListGroupItem>50% will be burned (controlled by team in separate wallet which can be used only for voting)</ListGroupItem>
       </ListGroup>
     </header>
    );
  }
}

export default App;

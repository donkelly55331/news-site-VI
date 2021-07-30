import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import UsersAPI from "../api/UsersAPI.js"
import UserContext from '../contexts/userContext.js';

class LoginPage extends Component {

  handleFormSubmit = async (event) => {
    event.preventDefault();
    let credentialsObject = {
        'email': event.target.elements[0].value,
        'password': event.target.elements[1].value
    }
    // Not going to the API for authentication because of the .json error message
    // 
    console.log(credentialsObject)
    const user = await UsersAPI.login(credentialsObject)
    console.log(user)
    this.props.handleLogin(user)
    this.props.history.push('/')
  };



render() {

    return (
        <div style={{padding: '20px'}}>
          <h3> Login </h3>
          <Form onSubmit={this.handleFormSubmit }>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
    )


  }
}

export default LoginPage;


// Functional solution:
// function LoginPage() {
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     console.log(event.target.elements[0].value);
//     console.log(event.target.elements[1].value);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h3> Login </h3>
//       <Form onSubmit={handleFormSubmit}>
//         <FormGroup>
//           <Label for="email">Email</Label>
//           <Input type="email" name="email" id="email" />
//         </FormGroup>
//         <FormGroup>
//           <Label for="password">Password</Label>
//           <Input type="password" name="password" id="password" />
//         </FormGroup>
//         <Button>Submit</Button>
//       </Form>
//     </div>
//   )
// };

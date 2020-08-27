import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import './Test'
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
import Test from './Test';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddDataModal from './AddDataModal';
import { Navbar,Button,FormControl,Form,NavDropdown,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
class App extends React.Component {
  state = {
    open: false,
    token:""
  };

  trainModel= async ()=>{
    var auth=await  fetch("http://restobot.nutrocare.org/api/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
       },body: JSON.stringify({username: "me", password: "mal33sha"})})
       var authVal=await auth.json();
      this.setState({token:authVal['access_token']})

      var res=await  fetch("http://restobot.nutrocare.org/api/projects/default/models/jobs", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:"Bearer "+this.state.token+""
         }})
         var response=await res.json();
         console.log(response);
         alert(response.info);
  }
       



  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <div >
         <main>
         <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Rest-O-Bot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
           
            <Button onClick={this.onOpenModal} variant="outline-success">Add New</Button>
            <Button onClick={this.trainModel} variant="outline-success">Train</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
            <Switch>
                <Route path="/" component={Test} exact />
                <Route path="/about" component={Test} />
                <Route path="/shop" component={""} />
            </Switch>
        </main>
       
      
        <Modal open={open} onClose={this.onCloseModal}>
          <h4>Add example</h4>
        <AddDataModal/>
        </Modal>
      </div>
    );
  }
}

export default App;

   
   
 
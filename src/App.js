import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div className='App'>
        <Navbar dark color='primary'>
            <div className='container'>
                <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
            </div>
        </Navbar>
      </div>
    )
  }
}

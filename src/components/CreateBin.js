import React, { Component } from 'react';
import NavHeader from './NavHeader';
import axios from 'axios';

class CreateBin extends Component {
  constructor() {
    super();
    this.state = {
      price: '',
      name: '',
      image: '',
      buttonText: '+ Add to Inventory',
    };
    this.handleChange = this.handleChange.bind(this)
    this.createBin = this.createBin.bind(this)
  }

  createBin(e) {
    e.preventDefault();
    axios.post(`/api/bin/${this.props.match.params.id}`, {
      name: this.state.name,
      price: this.state.price,
      image: 'https://media.istockphoto.com/photos/milford-sound-landscape-south-island-new-zealand-picture-id492852010?k=6&m=492852010&s=612x612&w=0&h=wxap_GwlVWG7Rf4FBQa-XgEpQr2-ENPX1szXb3aYDWg='
    })
      .then(() => {
        this.props.history.push(`/bins/${this.props.match.params.id[0]}`)
      })
  }

  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="bin-parent">
        <header>
          <NavHeader createToggle={true} />
        </header>

        <div>
          <div className="createBin">
            <form>
              <p>Name:</p>
              <input name="name" type="text" value={this.state.name} onChange={this.handleChange} className="addInfoHolder" />
              <p>Price:</p>
                <div className="dollar-sign-container">
                  <span className="dollar-sign">$</span>
              <input name="price" type="text" value={this.state.price} onChange={this.handleChange} className="addInfoHolder" />
                  </div>
            </form>
            <button className="inventoryButton" onClick={this.createBin}>{this.state.buttonText}</button>
          </div>
        </div>

      </div>
    );
  }
}


export default CreateBin;
import React, { Component } from 'react';
import NavHeader from './NavHeader';
import axios from 'axios';

class Bins extends Component {
  constructor() {
    super();
    this.state = {
      price: '',
      name: '',
      image: '',
      isBin: false,
      allowEdit: true,
    };
    this.handleChange = this.handleChange.bind(this)
    this.updateData = this.updateData.bind(this)
    this.allowEdit = this.allowEdit.bind(this)
    this.deleteBin = this.deleteBin.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/bin/${this.props.match.params.id}`)
      .then(response => {
        const price = response.data[0].price;
        const name = response.data[0].name;
        const image = response.data[0].image;
        this.setState({
          price,
          name,
          image
        })
      });
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({
      [name]: value,
    });
  }

  deleteBin() {
    axios.delete(`/api/bin/${this.props.match.params.id}`)
      .then(() => {
        this.props.history.push(`/bins/${this.props.match.params.id[0]}`)
      })
      .catch(error => {
        console.warn(error)
      })
  }

  allowEdit(){
    this.setState({allowEdit: false})
  }

  updateData(e) {
    e.preventDefault();
    this.setState({ allowEdit: true })
    axios.put(`/api/bin/${this.props.match.params.id}`, {
      name: this.state.name,
      price: this.state.price
    })
      .then(response => {
        const price = response.data[0].price;
        const name = response.data[0].name;
        this.setState({
          price, name
        })
      })
      .catch(error => {
        console.warn(error)
      })
  }

  render() {
    return (
      <div className="bin-parent">
        <header>
          <NavHeader previous={this.props} isBin={true} func={this.props.history.push} />
        </header>
        <div>
          <div className='bin-container'>
            <div>
              <img className='binImage' src={this.state.image} alt="landscape" />
            </div>
            <div className="detailBin">
              <form onSubmit={e => e.preventDefault()}>
                <p>Name:</p>
                <input name="name" type="text" value={this.state.name} onChange={this.handleChange} className="nameHolder" />
                <p>Price:</p>
                <div className="dollar-sign-container">
                  <span className="dollar-sign">$</span>
              <input name="price" type="text" value={this.state.price} onChange={this.handleChange} className="addInfoHolder" />
                  </div>
              </form>
          {this.state.allowEdit ? <div className ='buttons'>

            <button className="edit-button" onClick={this.allowEdit}>Edit</button>
            <button className="delete-button" onClick={this.deleteBin}>Delete</button>
            </div>
            :
            <div className='buttons'>
            <button className="save-button" onClick={this.updateData}>Save</button>
            <button className="delete-button" onClick={this.deleteBin}>Delete</button>

            </div>
          }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Bins;
import React, { Component } from 'react';
import NavHeader from './NavHeader';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Shelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bins: []
    };
  }

  componentWillMount() {
    axios.get(`/api/shelf/` + this.props.match.params.id)
      .then(response => {
        this.setState({
          bins: response.data
        })
      })
  }

  render() {
    const shelfId = this.props.match.params.id;
    const bins = this.state.bins.map((data, i) => {
      if (data) {
        return (
          <Link className="link-header-child" to={`/bin/${shelfId}${data.bin}`} key={`${shelfId}${data.bin}`}>
            <div className="bin-child-links">Bin {data.bin}</div>
          </Link>
        );
      }

      return (
        <Link className="newBinLink"to={`/create/${shelfId}${i + 1}`} key={`${shelfId}${i+1}`}>+ Add inventory to bin</Link>
      );
    })

    return (
      <div className="bin-parent">
        <NavHeader previous={this.props}/>
        <div className="bin-child">
          {bins}
        </div>
      </div>
    );
  }
}

export default Shelf;
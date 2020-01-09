import React, { Component } from 'react';
import '../style/ListItem.css';

class ListItem extends Component {
  render() {
    return (
      <div className="list-item">
        <div>
          <span className="delete-button" onClick={() => this.props.deleteItem(this.props.id)}>
            <i className="fas fa-minus-hexagon"></i>
          </span>
        </div>
        <div>
          <span className="add-button">
            <i className="fas fa-file-check"></i>
          </span>
        </div>
        <span className="product-status">{this.props.status}</span>
        <p>{this.props.name}</p>
        <br/>
        <span className="product-anchor">
          <i className="fal fa-link"></i>
        </span>
        <a href={this.props.producturl}>{this.props.producturl}</a>
      </div>
    );
  }
}
export default ListItem;

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
          <span className="clone-button" onClick={() => this.props.cloneItem(this.props.list, {name: this.props.name, producturl: this.props.producturl})}>
            <i className="fas fa-clone"></i>
          </span>
        </div>
        <div>
          <span className="add-button">
            <i className="fas fa-pencil"></i>
          </span>
        </div>
        <span className="product-status" style={{background: this.props.status === 'Needed' ? 'red' : 'green'}}>{this.props.status}</span>
        <p>{this.props.name}</p>
        <br/>
        <span className="product-anchor">
          <i className="fal fa-link"></i>
        </span>
        <a href={this.props.producturl}>{this.props.producturl}</a>
        <span className="product-quantity">
          <input type="number"></input>
        </span>
      </div>
    );
  }
}
export default ListItem;

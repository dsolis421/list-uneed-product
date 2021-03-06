import axios from 'axios';
import React from 'react';
import ListItem from './ListItem';
import '../style/NeedList.css';

class NeedList extends React.Component {
  constructor() {
    super();

    this.state = {
      list: '',
      needList: [],
      showAddForm: false
    };
  }

  loadList() {
    //console.log('retrieving needlist');
    axios.get('/api/needlist/ssolis')
    .then(listing => {
      console.log('got list needlist');
      this.setState({
        list: listing.data[0]._id,
        needList: listing.data[0].list
      });
    })
    .catch(err => console.log("failed to load list",err));
  }

  deleteListItem(id) {
    var updatedList = this.state.needList.filter((items) => {
      return items.key !== id;
    });
    axios.post('/api/removelistitem/ssolis', updatedList)
    .then(() => {
      //this.setState({needList: updatedList});
      this.loadList();
    })
    .catch(err => console.log('clicking the item delete failed: ',err));
  }

  cloneListItem(list, addItem) {
    //console.log('clone item button clicked',list, addItem);
    axios.post(`/api/addlistitem/${list}`, addItem)
    .then(() => {
      this.loadList();
    })
    .catch(err => console.log('clicking the item clone failed',err));
  }

  componentDidMount() {
    this.loadList();
  }

  render(){
    return (
      <div className="need-list">
        <div className="need-list-header">
          <div>
            <input id="search-list-items" type="text"
            placeholder="Search items..."></input>
          </div>
          <div>
            <i className="fas fa-plus-hexagon"></i>
          </div>
        </div>
        {this.state.needList.length > 0 ? this.state.needList.map(item => {
          return (
            <ListItem key={item.key}
              id={item.key}
              list={this.state.list}
              status={item.status}
              name={item.name}
              producturl={item.producturl}
              deleteItem={this.deleteListItem.bind(this)}
              cloneItem={this.cloneListItem.bind(this)}/>
            )
          }) : (<p>No items to list</p>)
        }
      </div>
    );
  }
}

export default NeedList;

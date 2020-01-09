import axios from 'axios';
import React from 'react';
import ListItem from './ListItem';
import '../style/NeedList.css';

class NeedList extends React.Component {
  constructor() {
    super();

    this.state = {
      needList: []
    };
  }

  loadList() {
    console.log('retrieving needlist');
    axios.get('/api/needlist')
    .then(list => {
      console.log('got list',list.data);
      this.setState({
        needList: list.data
      });
    })
    .catch(err => console.log("failed to load list",err));
  }

  deleteListItem(item) {
    console.log('delete item button clicked', item);
    axios.delete('/api/needlist/' + item)
    .then(() => {
      console.log('new list incoming');
      this.loadList();
    })
    .catch(err => console.log('clicking the item delete failed: ',err));
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
            <ListItem key={item._id}
              id={item._id}
              status={item.status}
              name={item.name}
              producturl={item.producturl}
              deleteItem={this.deleteListItem.bind(this)}/>
            )
          }) : (<p>No items to list</p>)
        }
      </div>
    );
  }
}

export default NeedList;

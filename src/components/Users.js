import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
        <h2>Total users: {this.props.userCount}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)

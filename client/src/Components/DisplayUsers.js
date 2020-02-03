<<<<<<< HEAD
import React from "react";
=======
import React, { Component } from "react";
>>>>>>> 18183b340cb0f9aa27d295839e20a891ab449ff8
import "./customers.css";

class DisplayUsers extends React.Component {
  constructor() {
    super();

    this.state = { users: [] };
  }
  componentDidMount() {
    this.setState({
      users: this.getItems()
    });
  }

  getItems() {
    try {
      fetch("/admin-view-users")
        .then(recordset => recordset.json())
        .then(results => {
          console.log(results.recordset);
          this.setState({ users: results.recordset });
        });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.state.users);
    return (
      <ul>
        {this.state.users &&
          this.state.users.map(function(user, index) {
            return (
              <div className="jumbotron">
                <li> Severity: {user.severity}</li>
                <li> User Name:{user.name}</li>
                <li>User Email: {user.email}</li>
                <li>Description of Issue: {user.description}</li>
                <button>See Details</button>
              </div>
            );
          })}
      </ul>
    );
  }
}

export default DisplayUsers;

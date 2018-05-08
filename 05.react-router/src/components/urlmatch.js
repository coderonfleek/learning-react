import React from "react";

export default class UrlMatchPage extends React.Component {
  render() {
    //For every 'Route' component, details about the navigation is passed into props
    console.log(this.props);
    return (
      <div>
        <h2>Your Id is : {this.props.match.params.id} </h2>
      </div>
    );
  }
}

import React from "react";

export default class QueryPage extends React.Component {
  render() {
    //For every 'Route' component, details about the navigation is passed into props
    console.log(this.props);
    return (
      <div>
        <h2>Query String is : {this.props.location.search} </h2>
      </div>
    );
  }
}

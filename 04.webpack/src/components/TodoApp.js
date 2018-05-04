import React from "react";

import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";

//The main app component
export default class TodoApp extends React.Component {
  //Component state is defined in the constructor
  constructor(props) {
    super(props);

    //Set the 'state' property to an object representing application state
    //This will represent the initial state of the app
    this.state = {
      title: "React TODO App",
      subtitle: "Make the best use of your time",
      options: ["Item 1", "Item 2", "Item 4"]
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  //Called when thecomponent is first mounted unto the page
  componentDidMount() {
    console.log("TODO App was mounted!");
  } //componentDidMount

  //Called after the component updates (when state or prop values change)
  componentDidUpdate(prevProps, prevState) {
    console.log("TODO App was Updated!");
  } //componentDidUpdate

  //Used for clean up code when a component is being unmounted
  componentWillUnmount() {
    console.log("TODO App Unmounted!");
  } //componentWillUnmount

  //Function to handle the change of state when the handleDeleteAll functions runs from inside Options component
  handleDeleteOptions() {
    //To change state, we call this.setState and pass in a function that takes in the previous state
    //This then returns an object that contains the only portion of state we want to change.

    this.setState(prevState => {
      return {
        options: [] //Clear all options
      };
    });
  } //handleDeleteOptions

  //Function to handle deeleting one item, passed deep down via props to the component that uses it
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => {
      return {
        options: this.state.options.filter(option => {
          return option !== optionToRemove;
        })
      };
    });
  } //handleDeleteOption

  handleAddOption(option) {
    console.log(option);

    //Handle error
    if (!option) {
      return "An Option is required";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option Already Exists";
    }

    //If no errors then add option
    this.setState(prevState => {
      return {
        options: prevState.options.concat([option]) //NB: concat is used instead of push cos it returns a new array instead of manipulating the existing one thus manipulating previous state
      };
    });
  } //handleAddOption

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

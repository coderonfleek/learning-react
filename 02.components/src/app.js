//Header Component
//NB: Compnent names must start with uppercase
class Header extends React.Component {
  //Every component class must have a render method
  //It takes no arguments and returns only JSX

  render() {
    //Props : attributes of the component instance
    //this : refers to the current instance of the component

    console.log(this.props);

    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>
          <b>{this.props.subtitle}</b>
        </p>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    //The constructor is automatically called with the props argument
    //The constructor 'this' always refers to the instance of the object

    //Handle any inheritance cases
    super(props);

    //Fix 'this' binding for handleDeleteAll
    //this.handleDeleteAll = this.handleDeleteAll.bind(this);
  }

  /* handleDeleteAll() {
    //NB: 'this' here is null and does not refrence the instance of the component (Only the render function references the component instance)
    //Thus, you will need to bind 'this' in your render function to this method in your JSX as shown below
    //<button onClick={this.handleDeleteAll.bind(this)}>Delete All</button>

    //However, this method is innefficient and a better way is to fix the binding in the constructor as done above

    //You can then reference props as you would in your render method
    console.log(this.props.options);
  } */

  render() {
    return (
      <div>
        <p>
          {/* Bind onClick to the function that was passed down from the parent in a prop */}
          <button onClick={this.props.handleDeleteOptions}>Delete All</button>
        </p>
        <ol>
          {this.props.options.map(option => {
            return <Option key={option} option={option} />;
          })}
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.option}</li>;
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);

    //Set component state and use it for error
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error: error
      };
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.error}</p>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <p>
            <button>Add Option</button>
          </p>
        </form>
      </div>
    );
  }
}

//The main app component
class TodoApp extends React.Component {
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
    this.handleAddOption = this.handleAddOption.bind(this);
  }

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
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

var app = document.getElementById("app");

ReactDOM.render(<TodoApp />, app);

/* var app = document.getElementById("app");

const onFormSubmit = e => {
  e.preventDefault();

  //Capture where the event occured (on the form obviously) and extract the option value
  var optionValue = e.target.elements.option.value;

  console.log(optionValue);

  if (optionValue) {
    appData.options.push(optionValue);
    e.target.elements.option.value = "";

    renderApp();
  }
};

let appData = {
  options: ["Item 1", "Item 2"]
}; */
/*Map over options, a 'key' is required for uniqueness of each option 
NB: this syntax allows duplicates but throws an error for it*/
/* const renderApp = () => {
  const template = (
    <div>
      <h1>To do</h1>
      <p>{appData.options.length}</p>
      <ol>
        {appData.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>

      <div>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <p>
            <button>Add Option</button>
          </p>
        </form>
      </div>
    </div>
  );

  ReactDOM.render(template, app);
};

renderApp(); */

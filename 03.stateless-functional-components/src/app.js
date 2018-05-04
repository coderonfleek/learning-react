/* 
Stateless Functional Components: Components that are only built for presentation: They donot manage state, they only recieve props
In the App below, 'Header', 'Options' and 'Option' can be made stateless functional components
A SFC is a pure function (an equivalent of render) that takes in the props as its first argument and simply returns JSX

------------------
Delete Item

------------------
LifeCycle Methods
NB: SFCs don't have lifecycle methods
*/

//Header Component - SFC
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>
        <b>{props.subtitle}</b>
      </p>
    </div>
  );
};

//Setting default properties
Header.defaultProps = {
  title: "Default Title"
};

//Options Component - SFC
const Options = props => {
  return (
    <div>
      <p>
        {/* Bind onClick to the function that was passed down from the parent in a prop */}
        <button onClick={props.handleDeleteOptions}>Delete All</button>
      </p>
      <ol>
        {props.options.map(option => {
          return (
            <Option
              key={option}
              option={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          );
        })}
      </ol>
    </div>
  );
};

//Option Component - SFC
const Option = props => {
  return (
    <li>
      {props.option} &nbsp;
      <button
        onClick={() => {
          props.handleDeleteOption(props.option);
        }}
      >
        Remove
      </button>
    </li>
  );
};

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
    const error = this.props.handleAddOption(option);

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

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "p",
      null,
      React.createElement(
        "b",
        null,
        props.subtitle
      )
    )
  );
};

//Setting default properties
Header.defaultProps = {
  title: "Default Title"
};

//Options Component - SFC
var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      React.createElement(
        "button",
        { onClick: props.handleDeleteOptions },
        "Delete All"
      )
    ),
    React.createElement(
      "ol",
      null,
      props.options.map(function (option) {
        return React.createElement(Option, {
          key: option,
          option: option,
          handleDeleteOption: props.handleDeleteOption
        });
      })
    )
  );
};

//Option Component - SFC
var Option = function Option(props) {
  return React.createElement(
    "li",
    null,
    props.option,
    " \xA0",
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          props.handleDeleteOption(props.option);
        }
      },
      "Remove"
    )
  );
};

var AddOption = function (_React$Component) {
  _inherits(AddOption, _React$Component);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this.handleAddOption = _this.handleAddOption.bind(_this);

    //Set component state and use it for error
    _this.state = {
      error: undefined
    };
    return _this;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "p",
            null,
            React.createElement(
              "button",
              null,
              "Add Option"
            )
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

//The main app component


var TodoApp = function (_React$Component2) {
  _inherits(TodoApp, _React$Component2);

  //Component state is defined in the constructor
  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    //Set the 'state' property to an object representing application state
    //This will represent the initial state of the app
    var _this2 = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this2.state = {
      title: "React TODO App",
      subtitle: "Make the best use of your time",
      options: ["Item 1", "Item 2", "Item 4"]
    };

    _this2.handleDeleteOptions = _this2.handleDeleteOptions.bind(_this2);
    _this2.handleDeleteOption = _this2.handleDeleteOption.bind(_this2);
    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    return _this2;
  }

  //Called when thecomponent is first mounted unto the page


  _createClass(TodoApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("TODO App was mounted!");
    } //componentDidMount

    //Called after the component updates (when state or prop values change)

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log("TODO App was Updated!");
    } //componentDidUpdate

    //Used for clean up code when a component is being unmounted

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("TODO App Unmounted!");
    } //componentWillUnmount

    //Function to handle the change of state when the handleDeleteAll functions runs from inside Options component

  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      //To change state, we call this.setState and pass in a function that takes in the previous state
      //This then returns an object that contains the only portion of state we want to change.

      this.setState(function (prevState) {
        return {
          options: [] //Clear all options
        };
      });
    } //handleDeleteOptions

    //Function to handle deeleting one item, passed deep down via props to the component that uses it

  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      var _this3 = this;

      this.setState(function (prevState) {
        return {
          options: _this3.state.options.filter(function (option) {
            return option !== optionToRemove;
          })
        };
      });
    } //handleDeleteOption

  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      console.log(option);

      //Handle error
      if (!option) {
        return "An Option is required";
      } else if (this.state.options.indexOf(option) > -1) {
        return "Option Already Exists";
      }

      //If no errors then add option
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option]) //NB: concat is used instead of push cos it returns a new array instead of manipulating the existing one thus manipulating previous state
        };
      });
    } //handleAddOption

  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return TodoApp;
}(React.Component);

var app = document.getElementById("app");

ReactDOM.render(React.createElement(TodoApp, null), app);

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

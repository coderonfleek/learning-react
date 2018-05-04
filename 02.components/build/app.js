"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Header Component
//NB: Compnent names must start with uppercase
var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",

    //Every component class must have a render method
    //It takes no arguments and returns only JSX

    value: function render() {
      //Props : attributes of the component instance
      //this : refers to the current instance of the component

      console.log(this.props);

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "b",
            null,
            this.props.subtitle
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Options = function (_React$Component2) {
  _inherits(Options, _React$Component2);

  function Options(props) {
    _classCallCheck(this, Options);

    //The constructor is automatically called with the props argument
    //The constructor 'this' always refers to the instance of the object

    //Handle any inheritance cases
    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

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

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          React.createElement(
            "button",
            { onClick: this.props.handleDeleteOptions },
            "Delete All"
          )
        ),
        React.createElement(
          "ol",
          null,
          this.props.options.map(function (option) {
            return React.createElement(Option, { key: option, option: option });
          })
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component3) {
  _inherits(Option, _React$Component3);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        null,
        this.props.option
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component4) {
  _inherits(AddOption, _React$Component4);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this4.handleAddOption = _this4.handleAddOption.bind(_this4);

    //Set component state and use it for error
    _this4.state = {
      error: undefined
    };
    return _this4;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      error = this.props.handleAddOption(option);

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


var TodoApp = function (_React$Component5) {
  _inherits(TodoApp, _React$Component5);

  //Component state is defined in the constructor
  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    //Set the 'state' property to an object representing application state
    //This will represent the initial state of the app
    var _this5 = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this5.state = {
      title: "React TODO App",
      subtitle: "Make the best use of your time",
      options: ["Item 1", "Item 2", "Item 4"]
    };

    _this5.handleDeleteOptions = _this5.handleDeleteOptions.bind(_this5);
    _this5.handleAddOption = _this5.handleAddOption.bind(_this5);
    return _this5;
  }

  //Function to handle the change of state when the handleDeleteAll functions runs from inside Options component


  _createClass(TodoApp, [{
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
          handleDeleteOptions: this.handleDeleteOptions
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

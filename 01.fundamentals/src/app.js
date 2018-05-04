var app = document.getElementById("app");

//App 1 : JSX
/* var title = "This is a title";
var p1 = "The first paragraph";

//Function returning JSX
function getLocation() {
  return <p>Location: Enugu</p>;
}

var template = (
  <div>
    <h2>{title.toUpperCase()}</h2>
    <p id="myId">{p1}</p>
    {getLocation()}
  </div>
); 
ReactDOM.render(template, app);
*/

//App 2: Events and Attributes
//NB: Attribute names in JSX are similar to howyou call attributes in pure JS e.g className
//Google : react dom events for more events (Synthetic Events)

/* let count = 0;
const addOne = () => {
  console.log("Add one");
  count++;
  //Rerender App
  renderCounterApp();
};

//Note: addOne was called withiut the parenthesis



//Generates the app's JSX aand renders the app
const renderCounterApp = () => {
  var template = (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={addOne}>+ 1</button>
    </div>
  );

  ReactDOM.render(template, app);
};

//Initialize App
renderCounterApp(); */

//App 3: Forms and Input
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
};

const renderApp = () => {
  const template = (
    <div>
      <h1>To do</h1>
      <p>{appData.options.length}</p>
      <ol>
        {/* Map over options, a 'key' is required for uniqueness of each option 
        NB: this syntax allows duplicates but throws an error for it */}

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

renderApp();

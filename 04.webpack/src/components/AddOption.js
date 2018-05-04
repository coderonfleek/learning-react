import React from "react";
import OptionModal from "./OptionModal";

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);
    this.closeErrorModal = this.closeErrorModal.bind(this);

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

  //Function to close the error modal
  closeErrorModal() {
    this.setState(prevState => {
      return {
        error: undefined
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
        <OptionModal
          open={!!this.state.error}
          error={this.state.error}
          closeErrorModal={this.closeErrorModal}
        />
      </div>
    );
  }
}

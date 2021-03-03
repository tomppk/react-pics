import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    // Prevent form default behavior of submitting to url
    event.preventDefault();

    // Here (this.state.term) by default 'this' refers to what is left of the dot . so this instance SearchBar's props.onSubmit object.
    // The default 'this' is changed to refer to parent
    // element App by using arrow function when defining
    // App class method onSearchSubmit()
    // Access property set for this instance of SearchBar
    // by parent component App with this.props.onSubmit().
    // Use this SearchBar instance's state.term as function
    // onSearchSubmit() parameter.

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {/* When submitting form call function for this instance of SearchBar
         */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              // When user types in text field update
              // SearchBar component's state to equal
              // to what is typed.
              // Set text input's value to equal SearchBar
              // state. This is called controlled element
              // ie. user's input is overwritten with same
              // value but the input value is known all the
              // time by SearchBar
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

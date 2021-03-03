import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

// Class-based component App can have state
// needs to extend React.Component
class App extends React.Component {
  // Initialize App state property as empty array
  state = { images: [] };

  // Class method, do not use const.
  // Use arrow function to automatically bind 'this'
  // so that it always refers to 'this' instance of App
  onSearchSubmit = async (term) => {
    // Axios.get takes two parameters: api url, config object. Returns a promise object
    // Use async/await or .then to work with promises
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // Component state updated only with setState()
    // This function runs only after getting response object
    this.setState({ images: response.data.results });
  };

  // Class components require render() method
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* Pass function as property to SearchBar component. SearchBar can call passed function by accessing props.onSubmit
         */}
        {/* Here by defaut 'this' refers to props object onSubmit. 'This' always refers to what is left of
        the . 
        'This' is not App and not SearchBar component but
         SearchBar's props.onSubmit object.
         To make 'this' refer to this instance of App
         use arrow function as it automatically binds 'this' to instance it belongs to. 
         Three ways:
         1. Define onSearchSubmit method as arrow function

         2. Use arrow function in callback function. 
         onSubmit={()=> onSearchSubmit}

         3.Use constructor in App to bind 'this'
         constructor(props) {
           super(props)
           this.onSearchSubmit = this.onSearchSubmit.bind(this)}
           */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Pass images array to ImageList component */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

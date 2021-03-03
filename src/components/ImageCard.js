import React from "react";

// Use this.props to access properties passed by parent
class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    // If state initialized inside constructor
    // need to use this.state = {}
    // If no constructor can use just state = {}
    this.state = { spans: 0 };

    // Create a React reference and assign it to instance
    // variable (class property of ImageCard instance).
    // Add this reference to <img> tag property so React
    // can access it later in the DOM
    this.imageRef = React.createRef();
  }

  // When component is rendered add an event listener to
  // it that listens for 'load'. So only after image is
  // loaded into the browser call setSpans method
  // for this specific instance of ImageCard
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  // Use arrow function to bind 'this' to this instance
  // of ImageCard component.
  // Otherwise references undefined in eventListener above
  setSpans = () => {
    // Get image height px from DOM in browser
    const height = this.imageRef.current.clientHeight;

    // Divide img height by row height and round up to
    // nearest full integer to get amount of 10px rows
    // where image fits
    const spans = Math.ceil(height / 10);

    // when key: value same {spans: spans} shorthand
    this.setState({ spans });
  };

  render() {
    // Image objects properties are destructured with
    // { description, urls } so no need to type
    // image.description etc.
    const { description, urls } = this.props.image;
    return (
      // Add inline style. JSX syntax first curly
      // braces indicate that passing in Javascript.
      // Second curly braces indicate passing in object
      // Instead of CSS style name grid-row-end use
      // camelcase.
      // With string template literal add string to
      // CSS and value from this.state
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* <img> tag is not a HTML/DOM element!
          it is a JSX element that will eventually be
          rendered as HTML/DOM element.
          Assigning ref gives us a handle to access
          this particular element in the DOM later */}
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A React developer',
        imgSrc: 'https://example.com/avatar.jpg',
        profession: 'Software Engineer',
      },
      show: false,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ elapsedTime: this.state.elapsedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    return (
      <div className="App">
        <h1>Class-Based Component</h1>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {this.state.show && (
          <div>
            <h2>Person's Profile</h2>
            <p>Full Name: {this.state.person.fullName}</p>
            <p>Bio: {this.state.person.bio}</p>
            <p>Profession: {this.state.person.profession}</p>
            <img src={this.state.person.imgSrc} alt="Person" />
            <p>Elapsed Time: {this.state.elapsedTime} seconds</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;


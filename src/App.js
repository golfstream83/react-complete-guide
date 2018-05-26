import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState(
      {
        persons: [
          {name: newName, age: 29},
          {name: 'Manual', age: 30}
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          {name: 'Max', age: 29},
          {name: event.target.value, age: 30}
        ]
      }
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <button
            style={style}
            onClick={() => this.switchNameHandler('Maximillian')}>Switch Name</button>
          <Person
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;

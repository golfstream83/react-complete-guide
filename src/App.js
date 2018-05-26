import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29}      
    ],
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            <Person
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}>
              My Hobbies: Racing
            </Person>
        </div>
      );
    }

    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
      </div>
    );
  }
}

export default App;

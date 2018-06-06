import React from 'react';

import classes from './Cockpit.css';
import Auxiliary from '../../hocs/Auxiliary';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;
    if (props.showPersons) {
      btnClass = [classes.Button, classes.Red].join(' ');
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <Auxiliary>
        <h1 className="App-title">{props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={props.clicked}>
        Toggle Persons </button>
        <button onClick={props.login}>Log in</button>
      </Auxiliary>
    );
};

export default cockpit;
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import EmployeeList from './components/employeeList'; 

const App = () => {
  return (
    <div> 
      <EmployeeList /> 
    </div> 
  );
}

Meteor.startup(() => {
  // code to run on client at startup
  ReactDOM.render(<App/>, document.querySelector('.container')); 
});

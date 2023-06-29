import React, { useState } from 'react';
import './App.css';
import EmployeeDirectory from './EmployeeDirectory';
import EmployeeTable from './EmployeeTable';

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEmployeeSelection = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='LeftSide'>
          <EmployeeDirectory onEmployeeSelect={handleEmployeeSelection} />
        </div>
        <div className='RightSide'>
          <EmployeeTable employee={selectedEmployee} />
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react';
import fakeApiData from './fakeApiData';

function EmployeeDirectory({ onEmployeeSelect }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(fakeApiData);
  }, []);

  const handleEmployeeClick = (employee) => {
    onEmployeeSelect(employee);
  };

  return (
    <div className='cont'>
      <div className='top-block'>Employee Directory</div>
      <div className='top-search'>Search</div>
      <div className='cont-block'>
      {employees.map((personInfo) => (
        <div key={personInfo.id}>
          <div className='block' onClick={() => handleEmployeeClick(personInfo)}>
            <div className='last-name'>{personInfo.lastName}</div>
            <div>{personInfo.job}</div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default EmployeeDirectory;

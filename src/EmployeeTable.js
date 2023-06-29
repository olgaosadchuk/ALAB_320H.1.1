import React from 'react';

function EmployeeTable({ employee }) {
  if (!employee) {
    return <div className='select-eployee'>Please select an employee.</div>;
  }

  return (
    <div className='employee-details'>
      <div className='top-block-employee'>Employee</div>
      <div className='last-name-job'>
        <div className='last-name-employee'>{employee.lastName}</div>
        <div className='job'>{employee.job}</div>
      </div>
      <div className='callOffice'><b>Call Office</b><br />{employee.callOffice}</div>
      <div className='callMobile'><b>Call Mobile</b><br />{employee.callMobile}</div>
      <div className='sms'><b>SMS</b><br />{employee.sms}</div>
      <div className='email'><b>Email</b><br />{employee.email}</div>
    </div>
  );
}

export default EmployeeTable;
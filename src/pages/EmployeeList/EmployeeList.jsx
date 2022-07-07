import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css';

/**
 * React component to create the employee list
 * @returns { React.ReactElement } EmployeeList page
 */
function EmployeeList() {
   return (
      <main className="list_wrapper">
         <h2 className="list_title">- Current Employees -</h2>
         <table className="list_table" id="employee-table"></table>
         <Link className="list_link" to="/">
            Home
         </Link>
      </main>
   );
}

export default EmployeeList;

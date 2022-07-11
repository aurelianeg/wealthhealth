import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './EmployeeList.css';

/**
 * React component to create the employee list
 * @returns { React.ReactElement } EmployeeList page
 */
function EmployeeList() {
   const employees = useSelector((state) => state.employees);

   const tableColumns = [
      {
         id: 'firstName',
         name: 'First Name',
         selector: (row) => row.firstName,
         sortable: true,
         wrap: true,
         center: true,
      },
      {
         id: 'lastName',
         name: 'Last Name',
         selector: (row) => row.lastName,
         sortable: true,
         wrap: true,
         center: true,
      },
      {
         id: 'startDate',
         name: 'Start Date',
         selector: (row) => row.startDate,
         sortable: true,
         center: true,
      },
      {
         id: 'department',
         name: 'Department',
         selector: (row) => row.department,
         sortable: true,
         wrap: true,
         center: true,
      },
      {
         id: 'dateOfBirth',
         name: 'Date of Birth',
         selector: (row) => row.dateOfBirth,
         sortable: true,
         center: true,
      },
      {
         id: 'street',
         name: 'Street',
         selector: (row) => row.street,
         sortable: true,
         wrap: true,
         center: true,
      },
      {
         id: 'city',
         name: 'City',
         selector: (row) => row.city,
         sortable: true,
         wrap: true,
         center: true,
      },
      {
         id: 'state',
         name: 'State',
         selector: (row) => row.state,
         sortable: true,
         center: true,
      },
      {
         id: 'zipCode',
         name: 'ZIP Code',
         selector: (row) => row.zipCode,
         sortable: true,
         center: true,
      },
   ];

   const listTableStyles = {
      headCells: {
         style: {
            fontSize: '16px',
            padding: '5px',
         },
      },
      cells: {
         style: {
            fontSize: '16px',
            paddingLeft: '5px',
            paddingRight: '5px',
            paddingTop: '10px',
            paddingBottom: '10px',
         },
      },
   };

   return (
      <main className="list_wrapper">
         <h2 className="list_title">- Current Employees -</h2>
         <DataTable
            className="list_table"
            columns={tableColumns}
            data={employees}
            striped={true}
            highlightOnHover={true}
            customStyles={listTableStyles}
         />
         <Link className="list_link" to="/">
            Home
         </Link>
      </main>
   );
}

export default EmployeeList;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../utils/style/GlobalStyle';
import Header from './Header/Header';
import CreateEmployee from '../pages/CreateEmployee/CreateEmployee';
import EmployeeList from '../pages/EmployeeList/EmployeeList';
import Error from '../pages/Error/Error';

/**
 * React component for App with React Router
 * @returns { React.ReactElement } App component
 */
function App() {
   return (
      <div>
         <Router>
            <GlobalStyle />
            <Header />
            <Routes>
               <Route exact path="/" element={<CreateEmployee />}></Route>
               <Route path="/employee-list" element={<EmployeeList />}></Route>
               <Route path="*" element={<Error />}></Route>
            </Routes>
         </Router>
      </div>
   );
}

export default App;

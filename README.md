# Wealth Health

Wealth Health[^1] is a application to handle employee records. New employees can be created, and the list of all previously created employees is available.

**Goal of this project**: App conversion from jQuery to React, npm package creation, .

## Load specifications

### Website designs

No specific designs were available on the [old application version](https://github.com/OpenClassrooms-Student-Center/P12_Front-end). A website design was created, to modernize the application with colors matching the company logo.

![Design for the home page](./src/assets/design/homepage.png 'Design for the home page')

### Features

-  Users can create a new employee by filling the form on homepage (`/`).
-  If inputs are empty on form submit, error messages appear to remind user to fill out missing fields.
-  If all inputs are filled, the confirmation modal is shown when user submits the form to create a new employee.
-  A list of created employees is available on the `/employee-list` page, where each table column can be sorted by ascending or descending order.
-  Users can also search for an specific employee in the list with the search bar.

The old version of the application used jQuery, which leaded to massive bugs and increased internal complaints. The app has here been upgraded with React. The biggest issues for users were four jQuery plugins, very slow and incompatible with applying custom styles: [date pickers](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/1), [modal](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/3), [dropdowns](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/4) and [table](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues/2).

To solve that, a new React component was created for one of the plugins only ([react-select](https://www.npmjs.com/package/@aurelianeg/react-select) for dropdowns), and existing React components were used for the other three plugins ([react-modal](https://www.npmjs.com/package/react-modal) for modal, [react-data-table-component](https://www.npmjs.com/package/react-data-table-component) for table, and HTML `<input type="date">` tag for date pickers).

### Technical constraints

-  Application conversion with React (from jQuery):
   -  New version fo application pages.
   -  Use of state management system (Redux) instead of local storage.
   -  Conversion of jQuery plugins in React (one from stratch, other three plugins from existing published components).
-  No class when writing libraries in React.
-  Documentation of converted React components with general description and comments (JSDoc).
-  Creation of a separate [repository](https://github.com/aurelianeg/react-select) for the created plugin in React, published as a [npm package](https://www.npmjs.com/package/@aurelianeg/react-select).
-  Performance tests with Lighthouse on old and new application versions.

## Prerequisites

-  [NodeJS](https://nodejs.org/en/) v12+
-  [npm](https://www.npmjs.com/)
-  [Yarn](https://yarnpkg.com/)
-  [React](https://fr.reactjs.org/) v18.1.0
-  [React Router](https://reactrouter.com/) v6.3.0
-  [React Modal](https://www.npmjs.com/package/react-modal) v3.15.1
-  [React Data Table Component](https://www.npmjs.com/package/react-data-table-component) v7.5.2
-  [React Redux](https://react-redux.js.org/) v8.0.2
-  [Redux Toolkit](https://redux-toolkit.js.org/) v1.8.2
-  [PropTypes](https://www.npmjs.com/package/prop-types) v15.8.1
-  [StyledComponents](https://www.npmjs.com/package/styled-components) v5.3.5
-  [@aurelianeg React Select](https://www.npmjs.com/package/@aurelianeg/react-select) v0.1.1

## Installation and launch

1. Clone the repository

```sh
git clone https://github.com/aurelianeg/wealthhealth.git
```

2. Install the dependencies

```sh
npm install
```

3. Launch the project

```sh
npm start
```

It runs the app in the development mode, and opens [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload when changes are made in the code. Any lint errors can also be seen in the console.

Three false employees have been created to visualize a non-empty employee table. Feel free to delete them in `src/scripts/store.js` if needed.

[^1]: This is the 11th project of the "Front-end developer (JS - React)" training by OpenClassrooms.

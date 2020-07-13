import React from 'react';
import logo from './logo.svg';
import EnhancedTable from './component/table'
import './App.css';
import {TableContextProvider} from './context/tableContext'

function App() {
  return (
    <div>
      <TableContextProvider>
        <EnhancedTable/>
      </TableContextProvider>
    </div>
  );
}

export default App;

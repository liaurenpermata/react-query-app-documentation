import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Planet from './component/Planet'
import People from './component/People'
import Todolist from './component/TodoList'

function App() {

  // const [page, setPage] = useState('planets')

  return (
    <div className="App">
      {/* <h1>Star Wars Info</h1>
      <Navbar setPage={setPage}/>
      <div className='content'>
        {page === 'planets' ? <Planet/> : <People/>}
      </div> */}
      <Todolist/>
    </div>
  );
}

export default App;

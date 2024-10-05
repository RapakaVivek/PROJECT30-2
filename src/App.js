
import './App.css';

import Calculator from './Calculator';
import Component from './Component';
import DynamicBackground from './DynamicBackground';
import Fetch from './Fetch';
import Navbar from './Navbar';
import QuoteGenerator from './QuoteGenerator';
import Timer from './Timer';
import TodoList from './TodoList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteGenerator />
      <Routes>
        <Route path='/component' element = {<Component />}/>
        <Route path='/fetch' element = {<Fetch />}/>
        <Route path='/calculatoe' element = {<Calculator />}/>
        <Route path='/timer' element = {<Timer />}/>
        <Route path='/todolist' element = {<TodoList />}/>
        <Route path='/dynamic' element = {<DynamicBackground />} />
      </Routes>
     {/* <Component />
     <Fetch />
     <Calculator />
     <Timer />
     <TodoList />
     <DynamicBackground /> */}
    </div>
  );
}

export default App;

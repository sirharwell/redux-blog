import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
);


export default App;

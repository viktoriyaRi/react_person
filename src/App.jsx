// src/App.jsx
import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  age: 25,
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  sex: 'm',
  age: 25,
  isMarried: false,
};

export const App = () => (
  <div className="App">
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);

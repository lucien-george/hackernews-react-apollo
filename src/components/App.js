import React, { Component } from 'react';
import LinkList from './LinkList'
import CreateLink from './CreateLink';
import Header from './Header';
import Login from './Login';
import Search from './Search';
import { Route, Routes } from 'react-router-dom';
import logo from './../logo.svg';
import './../styles/App.css';

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route exact path="/new/1" element={<LinkList />} />
          <Route exact path="/create" element={<CreateLink />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/new/:page" element={<LinkList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

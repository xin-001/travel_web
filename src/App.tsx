import React from 'react';
import styles from './App.module.css';
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage, SignIn, Register, DetailPage } from './pages';

function App() {
  return (
    <div className={styles.App}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/detail/:touristRouteId' element={<DetailPage/>}/>
          <Route path='*' element={<h1>404 not found</h1>}/>
        </Routes>
    </div>
  );
}

export default App;

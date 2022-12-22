import React from 'react';
import styles from './App.module.css';
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
  return (
    <div className={styles.App}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </div>
  );
}

export default App;

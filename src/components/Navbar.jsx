import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-darkbg text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <div className="p-6">
        Ayesha
      </div>
    </div>
  );
};

export default App;

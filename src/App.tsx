import React from 'react';
import ExperienceBar from './components/ExperienceBar';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <ExperienceBar/>
      <h1>Hello NLW</h1>
    </div>
  );
};

export default App;

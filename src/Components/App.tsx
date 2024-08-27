import React from 'react';

interface Props {
  title?: string;
  subtitle?: string; // Optional prop
}

const App: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

export default App;

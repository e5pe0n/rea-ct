import { FC } from 'react';

import CounterWidget from 'containers/templates/CounterWidget';

import './App.css';

const App: FC = () => (
  <div className="container">
    <header>
      <h1>Beads Counter</h1>
    </header>
    <CounterWidget initialCount={0} />
  </div>
);

export default App;

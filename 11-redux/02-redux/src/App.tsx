import { FC } from 'react';

import ColorfulBeads from 'containers/molecules/ColorfulBeads';
import CounterBoard from 'containers/organisms/CounterBoard';

import './App.css';

const App: FC = () => (
  <div className="container">
    <header>
      <h1>Beads Counter</h1>
    </header>
    <CounterBoard />
    <ColorfulBeads />
  </div>
);

export default App;

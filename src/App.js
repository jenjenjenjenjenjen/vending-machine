import VendingMachine from './VendingMachine';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Candy from './Candy';
import Soda from './Soda';
import Chips from './Chips';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

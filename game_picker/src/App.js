import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './Views/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

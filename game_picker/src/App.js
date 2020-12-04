import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Loading from './components/loading';
import Navbar from './components/navbar';
import Router from './components/router';

function App() {
  const { isLoading } = useAuth0();

  if(isLoading) {
    return <Loading />
  }
  return (
    <div className="background">
      <Navbar />
      <div className="App">
        <Router />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import { Route, Switch } from "react-router";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' Component={Home} />
        <Route path='/register' Component={Register} />
      </Switch>
      <Home />
    </div>
  );
}

export default App;

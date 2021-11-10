import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/home/Home';
import { UserProvider } from './UserContext/UserContext';
import Delete from './components/Delete/Delete';
import Read from './components/Read/Read';
import Create from './components/Create/Create';
function App() {
  return (
    <div className="App">
      <UserProvider>
      <Router>
        <Switch>
          
          <Route exact path="/" component={Home}/>
          <Route exact path="/create" component={Create}/>
          <Route exact path="/view/:id" component={Read}/>
          <Route exact path="/delete/:id" component={Delete}/>
        </Switch>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;

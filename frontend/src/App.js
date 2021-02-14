import './App.css';
import AddMeme from './components/addmeme';
import VisitMeme from './components/visitmeme';
import UpdateMeme from './components/updatememe';
import Nav from './components/nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
      <Nav/>
      <Switch>
          <Route exact path="/"><VisitMeme/></Route>
          <Route path="/addmeme"><AddMeme/></Route>
          <Route path="/updatememe/:id" component={UpdateMeme}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

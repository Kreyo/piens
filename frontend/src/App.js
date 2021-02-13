import './App.css';
import List from "./components/List";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
        <Router>
            <div
                className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <Link className="my-0 mr-md-auto font-weight-normal h5" to="/">Test page</Link>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link className="p-2 text-dark" to="/">Home</Link>
                    <Link className="p-2 text-dark" to="/register">Add user</Link>
                </nav>
            </div>
            <Switch>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <List />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;

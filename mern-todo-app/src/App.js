import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';
import {Layout} from './components/Layout';
import {NavComp} from './components/Navbar';
import {Jumbotron} from './components/Jumbotron'
import './assests/css/jumbo.css'
import './index.css'
function App() {
  return (
    <React.Fragment>
      <Router>
      <NavComp/>
      <Jumbotron/>
        <Layout>
          <Switch>
            <Route exact path = '/' component={TodoList}/>
            <Route exact path = '/create' component={CreateTodo}/>
            <Route exact path = '/edit/:id' component={EditTodo}/>
            <Route exact path = '/delete/:id' component={DeleteTodo}/>
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;

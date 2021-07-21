import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
      return (
         <div>
            <h2>Welcome to React Router Tutorial</h2>
            <Router>
               <div>
                  <h1>Link 1</h1>
                  <ul>
                     <li><Link to={'/app1'}>Home1</Link></li>
                     <li><Link to={'/Login1'}>Login1</Link></li>
                  </ul>
                  <h1>-----</h1>
                  <p>block1:</p>
                  <Switch>
                     <Route path="/app1" component={Home1} />
                     <Route exact path='/Login1' component={Login1} />
                  </Switch>
               </div>
            </Router>
            <hr />
            <Router>
               <div>
                  <h1>Link 2</h1>
                  <ul>
                     <li><Link to="/app2">Home2</Link></li>
                     <li><Link to="/Login2">Login2</Link></li>
                  </ul>
                  <h1>-----</h1>
                  <p>block2:</p>
                  <Switch>
                     <Route path="/app2" component={Home2} />
                     <Route exact path='/Login2' component={Login2} />
                  </Switch>
               </div>
            </Router>
         </div>
      );
}

function Home1(){
   return (
      <div>
         <h1>Home1</h1>
      </div>
   );
}

function Login1() {
   return (
      <div>
         <h1>Login1</h1>
      </div>
   );
}

function Home2(){
   return (
      <div>
         <h1>Home2</h1>
      </div>
   );
}

function Login2() {
   return (
      <div>
         <h1>Login2</h1>
      </div>
   );
}

export default App;
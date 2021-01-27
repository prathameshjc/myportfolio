import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { About } from './components/About';
import Navbar from './components/Navbar';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import Sidebar from './components/Sidebar'
function App() {
  return (
    <Router>
      <div className="App">
        <div className="container app__container">
          <div className="row app__row">

            <div className="col-lg-3 ">

              <Sidebar />

            </div>
            <div className="col-lg-9 app__main-content">
              {/* navbar */}
              <Navbar />
              <Switch>
                <Route path="/" exact>
                  <About />
                </Route>
                <Route path="/resume" exact>
                  <Resume />
                </Route>
                <Route path="/projects" exact>
                  <Projects />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

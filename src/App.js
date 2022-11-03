import Home from "./Component/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />



    </>
  );
}

export default App;

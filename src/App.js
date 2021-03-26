import Nav from './Nav';
import Model3D from './Model3D';
import Glossary from './Glossary';
import HelpGuide from './HelpGuide';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Model3D} />
          <Route path="/glosario" component={Glossary} />
          <Route path="/guiadeayuda" component={HelpGuide} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import VonRestorff from './pages/VonRestorff';
import Effect from './pages/Effect';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Error from './pages/Error';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    

    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/VonRestorff" exact component={VonRestorff} />
              <Route path="/Effect" exact component={Effect} />
              <Route path="/Contact" exact component={Contact} />
              <Route path="/AboutMe" exact component={AboutMe} />
              <Route path="*" exact component={Error} /> 
            </Switch>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
    
  );
};

export default App;

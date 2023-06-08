import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import Home from '@/src/pages/Home';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';
import Error from '../pages/Error';


const IonRouterOutlet = () => (
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route path="/tab2" component={Tab2} />
        <Route path="/tab3" component={Tab3} />
        <Route path="/404" component={Error} />
        <Redirect to="/404" />
      </IonRouterOutlet>
  );
  
  export default IonRouterOutlet;
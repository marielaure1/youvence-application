import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import './theme/styles.scss'

/* Components */
// import "@/assets/js/app.js"


import { logoSimple, search, pack, user } from '@/assets/index.js';
import Connexion from '@/src/pages/Connexion.jsx';
import Inscription from '@/src/pages/Inscription.jsx';
import Home from '@/src/pages/Home.jsx';
import Contact from '@/src/pages/Contact.jsx';
import Collections from '@/src/pages/Collections.jsx';
import Collection from '@/src/pages/Collection.jsx';
import Products from '@/src/pages/Products.jsx';
import Product from '@/src/pages/Product.jsx';
import Posts from '@/src/pages/Posts.jsx';
import Post from '@/src/pages/Post.jsx';
import Plans from '@/src/pages/Plans.jsx';
import Search from '@/src/pages/Search.jsx';
import Me from '@/src/pages/Me.jsx';
import Checkout from '@/src/pages/Checkout.jsx';
import Error from '@/src/pages/Error.jsx';
import ProtectedRoute from '@/src/components/routes/ProtectedRoute';
import UnaccessibleRoute from '@/src/components/routes/UnaccessibleRoute';

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/search" component={Search} />
          <ProtectedRoute path="/me" component={Me} />
          <ProtectedRoute path="/contact" component={Contact} />
          <ProtectedRoute path="/collections" component={Collections} />
          <ProtectedRoute path="/collections/:slug" component={Collection} />
          {/* <ProtectedRoute path="/products" component={Products} /> */}
          <ProtectedRoute path="/products/:slug" component={Product} />
          <ProtectedRoute path="/posts" component={Posts} />
          <ProtectedRoute path="/posts/:slug" component={Post} />
          <ProtectedRoute path="/plans" component={Plans} />
          <ProtectedRoute path="/checkout" component={Checkout} />
          <ProtectedRoute path="/404" component={Error} />
          
          {/* <ProtectedRoute path="/connexion" component={Connexion} /> */}
          <Route exact path="/connexion">
            <Connexion/>
          </Route>
          <Route exact path="/inscription">
            <Inscription/>
          </Route>
          {/* <Redirect from="/" to="/home" /> */}
          {/* <Redirect to="/404" /> */}
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={logoSimple} />
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon aria-hidden="true" icon={search} />
          </IonTabButton>
          <IonTabButton tab="me" href="/me">
            <IonIcon aria-hidden="true" icon={user} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;


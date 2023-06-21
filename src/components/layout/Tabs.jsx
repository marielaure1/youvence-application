// import { Redirect, Route } from 'react-router-dom';
// import {
//   IonApp,
//   IonIcon,
//   IonLabel,
//   IonRouterOutlet,
//   IonTabBar,
//   IonTabButton,
//   IonTabs,
//   setupIonicReact,
//   IonPage
// } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
// import { ellipse, square, triangle } from 'ionicons/icons';
// import { logoSimple, search, pack, user } from '@/assets/index.js';
// import Connexion from '@/src/pages/Connexion.jsx';
// import Inscription from '@/src/pages/Inscription.jsx';
// import Home from '@/src/pages/Home.jsx';
// import Contact from '@/src/pages/Contact.jsx';
// import Collections from '@/src/pages/Collections.jsx';
// import Collection from '@/src/pages/Collection.jsx';
// import Products from '@/src/pages/Products.jsx';
// import Product from '@/src/pages/Product.jsx';
// import Posts from '@/src/pages/Posts.jsx';
// import Post from '@/src/pages/Post.jsx';
// import Plans from '@/src/pages/Plans.jsx';
// import Search from '@/src/pages/Search.jsx';
// import Me from '@/src/pages/Me.jsx';
// import Error from '@/src/pages/Error.jsx';

// const Tabs = () => {
//   return (
//     <IonPage>
//       <IonReactRouter>
//         <IonTabs>
//           <IonRouterOutlet>
//             <Route exact path="/connexion" component={Connexion} />
//             <Route path="/inscription" component={Inscription} />
//             <Route path="/contact" component={Contact} />
//             <Route path="/collections" component={Collections} />
//             <Route path="/collections/:slug" component={Collection} />
//             <Route path="/products" component={Products} />
//             <Route path="/products/:slug" component={Product} />
//             <Route path="/posts" component={Posts} />
//             <Route path="/posts/:slug" component={Post} />
//             <Route path="/plans" component={Plans} />
//             <Route path="/search" component={Search} />
//             <Route path="/me" component={Me} />
//             <Route path="/404" component={Error} />
//             <Route path="/" component={Home} />
//             <Redirect to="/404" />
//           </IonRouterOutlet>

//           <IonTabBar slot="bottom">
//             <IonTabButton tab="home" routerLink="/">
//               <IonIcon aria-hidden="true" icon={logoSimple} />
//               {/* <IonLabel></IonLabel> */}
//             </IonTabButton>
//             <IonTabButton tab="search" routerLink="/search">
//               <IonIcon aria-hidden="true" icon={search} />
//               {/* <IonLabel>Tab 2</IonLabel> */}
//             </IonTabButton>
//             <IonTabButton tab="orders">
//               <IonIcon aria-hidden="true" icon={pack} />
//               {/* <IonLabel>Tab 3</IonLabel> */}
//             </IonTabButton>
//             <IonTabButton tab="me" routerLink="/me">
//               <IonIcon aria-hidden="true" icon={user} />
//               {/* <IonLabel>Tab 3</IonLabel> */}
//             </IonTabButton>
//           </IonTabBar>
//         </IonTabs>
//       </IonReactRouter>
//     </IonPage>
//   );
// }

// export default Tabs;

import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { logoSimple, search, pack, user } from '@/assets/index.js';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
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
import Error from '@/src/pages/Error.jsx';
import ProtectedRoute from '@/src/components/routes/ProtectedRoute';
import UnaccessibleRoute from '@/src/components/routes/UnaccessibleRoute';

const Tabs = () => (
  <IonTabs>
    <IonRouterOutlet>
      <ProtectedRoute path="/" component={Home} />
      <ProtectedRoute path="/search" component={Search} />
      <ProtectedRoute path="/me" component={Me} />
      <ProtectedRoute path="/contact" component={Contact} />
      <ProtectedRoute path="/" component={Home} />
      <ProtectedRoute path="/collections" component={Collections} />
      <ProtectedRoute path="/collections/:slug" component={Collection} />
      <ProtectedRoute path="/products" component={Products} />
      <ProtectedRoute path="/products/:slug" component={Product} />
      <ProtectedRoute path="/posts" component={Posts} />
      <ProtectedRoute path="/posts/:slug" component={Post} />
      <ProtectedRoute path="/plans" component={Plans} />
      <ProtectedRoute path="/404" component={Error} />
      
      {/* <ProtectedRoute path="/connexion" component={Connexion} /> */}
      <Route exact path="/connexion">
         <Connexion/>
      </Route>
      <Route exact path="/inscription">
         <Inscription/>
      </Route>
      {/* <Redirect to="/404" /> */}
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/">
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
);

export default Tabs;


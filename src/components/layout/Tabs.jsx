import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonPage
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import { logoSimple, search, pack, user } from '@/assets/index.js';
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


const Tabs = () => {
    return (
        <IonPage>
        
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/collections" component={Collections} />
                    <Route path="/collections/:slug" component={Collection} />
                    <Route path="/products" component={Products} />
                    <Route path="/products/:slug" component={Product} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/posts/:slug" component={Post} />
                    <Route path="/plans" component={Plans} />
                    <Route path="/search" component={Search} />
                    <Route path="/me" component={Me} />
                    <Route path="/404" component={Error} />
                    <Redirect to="/404" />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href="/">
                        <IonIcon aria-hidden="true" icon={logoSimple} />
                        {/* <IonLabel></IonLabel> */}
                    </IonTabButton>
                    <IonTabButton tab="search" href="/search">
                        <IonIcon aria-hidden="true" icon={search} />
                        {/* <IonLabel>Tab 2</IonLabel> */}
                    </IonTabButton>
                    <IonTabButton tab="orders" href="/orders">
                        <IonIcon aria-hidden="true" icon={pack} />
                        {/* <IonLabel>Tab 3</IonLabel> */}
                    </IonTabButton>
                    <IonTabButton tab="me" href="/me">
                        <IonIcon aria-hidden="true" icon={user} />
                        {/* <IonLabel>Tab 3</IonLabel> */}
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
                
        </IonPage>
    )
}

export default Tabs;
import { IonHeader, IonSegment, IonSegmentButton, IonRouterLink } from '@ionic/react';
import { logo, logoBlack } from "@/assets"
import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = ({ headerClass = "", color = "white" }) => {

    return (
        <IonHeader className={`header-home ${headerClass}`}>
        <ion-grid>
                <ion-row>
                    <ion-col></ion-col>
                    <ion-col class="logo">
                        <img src={color == "black" ? logoBlack : logo} alt="Youvence" />
                    </ion-col>
                    <ion-col class="icones">
                        {/* <Icon icon="ph:heart-light" />
                        <Icon icon="ph:shopping-cart-simple-light" /> */}
                    </ion-col>
                </ion-row>
            </ion-grid>

            <IonSegment scrollable={true} value="heart">
                <IonRouterLink  routerLink="/">
                    <IonSegmentButton value="youcare">
                        Accueil
                    </IonSegmentButton>
                </IonRouterLink >
                <IonRouterLink  routerLink="/collections">
                    <IonSegmentButton value="youluxe">
                        Collections
                    </IonSegmentButton>
                </IonRouterLink>
                <IonRouterLink  routerLink="/posts">
                    <IonSegmentButton value="youdiscovery">
                        Articles
                    </IonSegmentButton>
                </IonRouterLink >

                <IonRouterLink  routerLink="/plans">
                    <IonSegmentButton value="youvence">
                        Abonnements
                    </IonSegmentButton>
                </IonRouterLink >
                <IonRouterLink  routerLink="/contact">
                    <IonSegmentButton value="youvence">
                        Contact
                    </IonSegmentButton>
                </IonRouterLink >
            </IonSegment>
        </IonHeader>
    );
};

export default Header;

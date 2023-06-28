import { IonHeader, IonSegment, IonSegmentButton } from '@ionic/react';
import { logo, logoBlack } from "@/assets"
import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = ({ headerClass = "", color = "white" }) => {
    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    };

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
                <IonSegmentButton onClick={() => navigateTo("/home")}>
                    Accueil
                </IonSegmentButton>
                <IonSegmentButton onClick={() => navigateTo("/collections")}>
                    Collections
                </IonSegmentButton>
                <IonSegmentButton onClick={() => navigateTo("/posts")}>
                    Articles
                </IonSegmentButton>
                <IonSegmentButton onClick={() => navigateTo("/plans")}>
                    Abonnements
                </IonSegmentButton>
                <IonSegmentButton onClick={() => navigateTo("/contact")}>
                    Contact
                </IonSegmentButton>
                <IonSegmentButton onClick={() => navigateTo("/mentions")}>
                    Mentions Légales
                </IonSegmentButton>
                <IonSegmentButton onClick={() => navigateTo("/cgv")}>
                Conditions Générales de Vente et d’Utilisation
                </IonSegmentButton>
                <IonSegmentButton onClick={() => navigateTo("/politiques")}>
                Politique de Confidentialité
                </IonSegmentButton>
            </IonSegment>
        </IonHeader>
    );
};

export default Header;

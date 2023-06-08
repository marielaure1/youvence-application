import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, logo, collectionBanner, connexionVideo } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';
import { IonInput, IonTextarea  } from '@ionic/react';

const Connexion = () => {
    
  
    return (
        <IonContent class="connexion">
         
            <video autoPlay loop muted src={connexionVideo}></video>


            <IonCard class="form">
                <form action="/">
                    <h1>Connectez-vous</h1>
                    <IonInput
                        className=""
                        type="email"
                        fill="solid"
                        label="Email"
                        labelPlacement="floating"
                        helperText="Entrez votre email">
                    </IonInput>
                    <IonInput
                        className=""
                        type="password"
                        fill="solid"
                        label="Mot de passe"
                        labelPlacement="floating"
                        helperText="Entrez votre mot de passe"
                        errorText="Email non valide">
                    </IonInput>

                    <ion-router-link class="mdp-oublie">Mot de passe oublié ?</ion-router-link>

                    <IonButton class="btn-envoyer">
                        Se connecter
                    </IonButton>

                    <ion-router-link class="link-form" href="/inscription">Vous n'avez pas de compte ? Inscrivez-vous !</ion-router-link>
                </form>
            </IonCard>
        </IonContent>
    );
};

export default Connexion;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, logo, collectionBanner, inscriptionVideo } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';
import { IonInput, IonTextarea  } from '@ionic/react';

const Inscription = () => {
    
  
    return (
        <IonContent class="connexion">
         
            <video autoPlay loop muted src={inscriptionVideo}></video>


            <IonCard class="form">
                <form action="">
                    <h1>Inscrivez-vous</h1>
                    <IonInput
                        className=""
                        type="text"
                        fill="solid"
                        label="Nom"
                        labelPlacement="floating"
                        helperText="Entrez votre nom">
                    </IonInput>
                    <IonInput
                        className=""
                        type="text"
                        fill="solid"
                        label="Prénom"
                        labelPlacement="floating"
                        helperText="Entrez votre prénom">
                    </IonInput>
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
                    <IonInput
                        className=""
                        type="password"
                        fill="solid"
                        label="Confirmer le mot de passe"
                        labelPlacement="floating"
                        helperText="Confirmez votre mot de passe"
                        errorText="Email non valide">
                    </IonInput>

                    <IonButton class="btn-envoyer">
                        S'inscrire
                    </IonButton>

                    <ion-router-link class="link-form" href="/connexion">Vous avez déjà un compte ? Connectez-vous !</ion-router-link>
                </form>
            </IonCard>
        </IonContent>
    );
};

export default Inscription;

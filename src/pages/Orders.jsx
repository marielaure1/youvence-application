import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, collectionBanner } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';
import { IonInput, IonTextarea  } from '@ionic/react';
import Header from '@/src/components/layout/Header';


const Contact = () => {
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState();
  
    const validateEmail = (email) => {
      return email.match(
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );
    };
  
    const validate = (ev) => {
      const value = (ev.target).value;
  
      setIsValid(undefined);
  
      if (value === '') return;
  
      validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
    };
  
    const markTouched = () => {
      setIsTouched(true);
    };
  
    return (
        <IonContent>
            <Header headerClass="header-contact header-static" color="black"/>
        
            <BackgroundAnimation />

            <section className="contact">
                <form action="">
                    <IonInput
                        className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type="text"
                        fill="solid"
                        label="Nom*"
                        labelPlacement="floating"
                        helperText="Entrez votre nom">
                    </IonInput>
                    <IonInput
                        className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type="text"
                        fill="solid"
                        label="Prénom*"
                        labelPlacement="floating"
                        helperText="Entrez votre prénom">
                    </IonInput>
                    <IonInput
                        className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type="text"
                        fill="solid"
                        label="Téléphone"
                        labelPlacement="floating"
                        helperText="Entrez votre numéro de téléphone">
                    </IonInput>
                    <IonInput
                        className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type="email"
                        fill="solid"
                        label="Email"
                        labelPlacement="floating"
                        helperText="Entrez un email valide"
                        errorText="Email non valide"
                        onIonInput={(event) => validate(event)}
                        onIonBlur={() => markTouched()}>
                    </IonInput>
                    <IonTextarea
                        fill="solid"
                        label="Email"
                        labelPlacement="floating"
                        helperText="Entrez un message">
                    </IonTextarea>

                    <IonButton class="btn-envoyer">
                        Envoyer
                    </IonButton>
                </form>
            </section>
        </IonContent>
    );
};

export default Contact;

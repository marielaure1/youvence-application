import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, collectionBanner } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';
import { IonInput, IonTextarea  } from '@ionic/react';
import Header from '@/src/components/layout/Header';
import GoogleMap from '@/src/components/google/Maps';


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
                        label="Sujet"
                        labelPlacement="floating"
                        helperText="Entrez le sujet de votre message"
                        errorText="Email non valide"
                        onIonInput={(event) => validate(event)}
                        onIonBlur={() => markTouched()}>
                    </IonInput>
                    <IonTextarea
                        fill="solid"
                        label="Message"
                        labelPlacement="floating"
                        helperText="Entrez votre message">
                    </IonTextarea>

                    <IonButton class="btn-envoyer">
                        Envoyer
                    </IonButton>
                </form>

                <div className="coords">
                    <p>Adresse : 19 rue Yves Toudic, 75010 Paris</p>
                    <p>Email : contact@youvence.fr</p>
                    <p>Téléphone : 01 23 45 67 89</p>
                </div>
            </section>

            <iframe id="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.5049472428556!2d2.362478682186297!3d48.870663828924954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e0950555883%3A0x25e6ea66d950d9ec!2s19%20Rue%20Yves%20Toudic%2C%2075010%20Paris!5e0!3m2!1sfr!2sfr!4v1686395477375!5m2!1sfr!2sfr" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            {/* <GoogleMap /> */}

            
        </IonContent>
    );
};

export default Contact;

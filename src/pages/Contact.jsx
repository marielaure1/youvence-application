import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, collectionBanner } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';
import { IonInput, IonTextarea  } from '@ionic/react';
import Header from '@/src/components/layout/Header';
import api from '@/src/api/api'

const Contact = () => {
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState();
    const [getData, setData] = useState();
    const [getDataError, setDataError] = useState();
    const [formActive, setFormActive] = useState(true);
    const [getMessage, setMessage] = useState(true);
  
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

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await api.sendEmailContact(getData)

        console.log(response);

        if(response?.data?.errors){
            setDataError(response?.data?.errors)
        }

        if(response?.data?.error){
            setMessage(response?.data?.error)
        }

        if(response?.data?.success){
            setMessage(response?.data?.success)
            setFormActive(false)
        }
    }

    const handleChange = (e) => {
        const {id, value} = e.target

        setData(prev => ({
            ...prev,
            nom: id == "nom" ? value : prev?.nom,
            prenom: id == "prenom" ? value : prev?.prenom,
            phone: id == "phone" ? value : prev?.phone,
            sujet: id == "sujet" ? value : prev?.sujet,
            message: id == "message" ? value : prev?.message,
        }))
    }

    useEffect(() => {
      
    console.log(getData);
    }, [getData])
    
    return (
        <IonContent>
            <Header headerClass="header-contact header-static" color="black"/>

            <section className="contact">

                {getMessage && <p className='message'>{getMessage}</p>}
                <form onSubmit={handleSubmit} className={`form-contact ${formActive == true ? 'show' : ""}`}>
                    <IonInput
                        className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type="text"
                        fill="solid"
                        label="Nom*"
                        labelPlacement="floating"
                        id="nom"
                        helperText={getDataError?.nomError}
                        onIonInput={handleChange}>
                    </IonInput>
                    <IonInput
                        className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type="text"
                        fill="solid"
                        label="Prénom*"
                        labelPlacement="floating"
                        id="prenom"
                        helperText={getDataError?.prenomError}
                        onIonInput={handleChange}>
                    </IonInput>
                    <IonInput
                        className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type="tel"
                        fill="solid"
                        label="Téléphone"
                        labelPlacement="floating"
                        id="phone"
                        helperText={getDataError?.phoneError}
                        onIonInput={handleChange}>
                    </IonInput>
                    <IonInput
                        className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type="text"
                        fill="solid"
                        label="Sujet*"
                        id="sujet"
                        labelPlacement="floating"
                        helperText={getDataError?.sujetError}
                        onIonInput={handleChange}>
                    </IonInput>
                    <IonTextarea
                        fill="solid"
                        label="Message"
                        id="message"
                        labelPlacement="floating"
                        helperText={getDataError?.messageError}
                        onIonInput={handleChange}>
                    </IonTextarea>

                    <IonButton type="submit" class="btn-envoyer">
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

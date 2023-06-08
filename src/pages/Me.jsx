import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonTextarea, IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList, IonThumbnail } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, logo, collectionBanner } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';

const Me = () => {
    let [segementStatus, setSegementStatus] = useState("infos");
    let [displayInfos, setDisplayInfos] = useState("show");

    const handleChange = (e) => {
        if(e.target.value){
            
            setSegementStatus(e.target.value)
            console.log(e.target.value)
        }
    }

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

    const displayForm = () => {
        if(displayInfos == "show"){
            setDisplayInfos("form")
        } else{
            setDisplayInfos("show")
        }
    }

    const [items, setItems] = useState([]);

    const generateItems = () => {
      const newItems = [];
      for (let i = 0; i < 50; i++) {
        newItems.push(`Item ${1 + items.length + i}`);
      }
      setItems([...items, ...newItems]);
    };
  
    useEffect(() => {
      generateItems();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // style={{ '--background': backgroundColor }}
    // class={segementStatus == "produits" ? "active" : ""}  
    return (
        <IonContent class="ion-content-me">
            <IonHeader class='header-home header-me header-static'>
               <ion-grid>
                    <ion-row>
                        <ion-col></ion-col>
                        <ion-col class="logo">
                            <img src={logo} alt="Youvence" />
                        </ion-col>
                        <ion-col class="icones">
                            {/* <Icon icon="ph:heart-light" />
                            <Icon icon="ph:shopping-cart-simple-light" /> */}
                        </ion-col>
                    </ion-row>
                </ion-grid>

                <IonSegment scrollable={true} value="infos" onClick={handleChange}>
                    <IonSegmentButton value="infos">
                        Mes infos personnelles
                    </IonSegmentButton>

                    <IonSegmentButton value="commandes">
                        Mes commandes
                    </IonSegmentButton>

                    <IonSegmentButton value="abonnements">
                        Mes abonnements
                    </IonSegmentButton>
                  
                </IonSegment>
            </IonHeader>

            
            <section className={`contact infos ${segementStatus == "infos" ? "active" : ""}`}>
                {/* email, nom, prénom, adresse, téléphone, date */}

                <Ion-Card class={displayInfos == "show" ? "active" : ""}>
                    <Ion-Card-Header>
                        <Ion-Card-Title>
                            <span>Mes Informations Personnelles</span>
                            <Icon icon="ph:pencil-simple-light" onClick={displayForm}/>
                        </Ion-Card-Title>
                        <Ion-Card-Subtitle>Membre depuis le 21/06/2022</Ion-Card-Subtitle>
                    </Ion-Card-Header>
                    <Ion-Card-Content>
                        <p>Nom : <span>Edjour</span></p>
                        <p>Prénom : <span>Marie-Laure</span></p>
                        <p>Email : <span>edjour.marielaure@gmail.com</span></p>
                        <p>Téléphone : <span>01 23 45 67 89</span></p>
                        <p>Adresse : <span>7 Allée de l'Orme Seul, 93120 La Courneuve</span></p>
                    </Ion-Card-Content>
                </Ion-Card>

                {/* mot de passe et verif mdp */}
                <form action="" className={displayInfos == "form" ? "active" : ""}>
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

                   <div className="flex align-items-centery">
                   <IonButton class="btn-envoyer">
                        Envoyer
                    </IonButton>
                    <IonButton class="btn-annuler" onClick={displayForm}>
                        Annuler
                    </IonButton>
                   </div>
                </form>
            </section>

            <section className={`commandes ${segementStatus == "commandes" ? "active" : ""}`}>

            <IonList>
                {items.map((item, index) => (
                <IonCard key={item}>
                        <IonCardHeader>
                            <IonCardTitle>03/05/2023</IonCardTitle>
                            <IonCardSubtitle>Nom du produit</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <IonItem>
                                <IonThumbnail slot="start">
                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                </IonThumbnail>
                                <IonLabel>Produits</IonLabel>
                                <p>12 rue adresse de livraison</p>
                            </IonItem>
                          
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonList>
            <IonInfiniteScroll
                onIonInfinite={(ev) => {
                generateItems();
                setTimeout(() => ev.target.complete(), 500);
                }}
            >
                <IonInfiniteScrollContent></IonInfiniteScrollContent>
            </IonInfiniteScroll>
            
            </section>

            <section className={`abonnements ${segementStatus == "abonnements" ? "active" : ""}`}>
                <p>Abonnements</p>
            </section>

            
        </IonContent>
    );
};

export default Me;

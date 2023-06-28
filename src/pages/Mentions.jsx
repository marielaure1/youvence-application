import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, collectionBanner } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';
import { IonInput, IonTextarea  } from '@ionic/react';
import Header from '@/src/components/layout/Header';
import api from '@/src/api/api'

const Mentions = () => {

    
    return (
        <IonContent>
            <Header  headerClass="header-contact header-static" />

            <section className="text-lorzem ">
            <h1>Mentions Légales</h1>

            <h2>Informations générales</h2>
            <p>Nom de la société : Youvence</p>
            <p>Forme juridique : Société par actions simplifiée (SAS)</p>

        <p>Adresse du siège social : 19 rue Yves Toudic, 75010 Paris</p>
        <p>Capital social : 100 000 euros</p>
        <p>Numéro d'identification : XXXXXXXXXX</p>
        <p>Numéro de TVA : FRXXXXXXXXX</p>
        <p>Adresse e-mail : contact@youvence.com</p>
        <p>Téléphone : +33 XX XX XX XX XX</p>

        <h2>Directeur de la publication :
</h2>
<p>Nom : John Doe</p>
<p>Adresse e-mail : john.doe@youvence.com</p>

<h2>Hébergement du site web :</h2>
<p>Nom de l'hébergeur : Société Hébergeur fictive</p>
<p>Adresse : 456 Rue Imaginaire, 75000 Ville Virtuelle</p>
<p>Téléphone : +33 XX XX XX XX XX</p>

<h2>Propriété intellectuelle :</h2>
<p>Le site web de Youvence et son contenu (textes, images, vidéos, etc.) sont protégés par le droit de la propriété intellectuelle. Tous les droits de propriété intellectuelle relatifs au site web sont la propriété exclusive de Youvence. Toute utilisation, reproduction ou représentation, intégrale ou partielle, du site web ou de son contenu, sans autorisation préalable écrite de Youvence, est strictement interdite.</p>
<h2>Collecte et utilisation des données personnelles</h2>   
<p>Youvence s'engage à respecter la confidentialité et la protection de vos données personnelles conformément aux dispositions de la législation en vigueur. Les informations collectées sur le site web sont utilisées dans le but de vous fournir des services personnalisés et de vous informer sur nos produits et offres. Vous pouvez consulter notre politique de confidentialité pour en savoir plus sur la collecte et l'utilisation de vos données personnelles.</p>    
           </section>
            
        </IonContent>
    );
};

export default Mentions;

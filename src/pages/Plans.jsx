import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, logo, collectionBanner } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';

const Plans = () => {
    const [backgroundColor, setBackgroundColor] = useState("")

    const handleScroll = (e) => {
        const ionContent = e.target
        const sections = document.querySelectorAll('.background');
        const scrollY = e.detail.currentY

        sections.forEach((section) => {
            const offsetTop = section.offsetTop;
            const dataColor = section.getAttribute('data-color');

            
    
            if (
              scrollY > offsetTop - window.innerHeight / 3 &&
              scrollY < offsetTop + section.offsetHeight - window.innerHeight / 3
            ) {
                setBackgroundColor(dataColor)
            } 
        });
    };
    
    return (
        <IonContent scrollEvents={true} onIonScroll={handleScroll} style={{ 'background': backgroundColor }}>
            <IonHeader className='header-home'>
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

                <IonSegment scrollable={true} value="heart">
                    <ion-router-link href="/">
                        <IonSegmentButton value="youcare">
                            Accueil
                        </IonSegmentButton>
                    </ion-router-link>

                    <ion-router-link href="/collections">
                        <IonSegmentButton value="youluxe">
                            Collections
                        </IonSegmentButton>
                    </ion-router-link>

                    <ion-router-link href="/posts">
                        <IonSegmentButton value="youdiscovery">
                            Articles
                        </IonSegmentButton>
                    </ion-router-link>

                    <ion-router-link href="/plans">
                        <IonSegmentButton value="youvence">
                            Abonnements
                        </IonSegmentButton>
                    </ion-router-link>
                    <ion-router-link href="/contact">
                        <IonSegmentButton value="youvence">
                            Contact
                        </IonSegmentButton>
                    </ion-router-link>
                </IonSegment>
            </IonHeader>
        
            <BackgroundAnimation />

            <section className="plans background" data-color="#915946">
                <div className='card-plans'>
                    <div>
                        <h2>Box YouLuxe</h2>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur. Quisque malesuada blandit pretium maecenas luctus.</p>
                        <ul>
                            <li>Limiter à 7 jours</li>
                            <li>Stock limité</li>
                            <li>Livraison par mois ou par trimestre</li>
                        </ul>
                        <p className='price'>85 € / mois</p>
                    </div>
                    <IonButton>
                        S'abonner
                    </IonButton>
                </div>
                <div className='card-plans'>
                    <div>
                        <h2>Box YouCare</h2>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur. Quisque malesuada blandit pretium maecenas luctus.</p>
                        <ul>
                            <li>Limiter à 7 jours</li>
                            <li>Stock limité</li>
                            <li>Livraison par mois ou par trimestre</li>
                        </ul>
                        <p className='price'>58 € / mois</p>
                    </div>
                    <IonButton>
                        S'abonner
                    </IonButton>
                </div>
                <div className='card-plans'>
                    <div>
                        <h2>Box Youvence</h2>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur. Quisque malesuada blandit pretium maecenas luctus.</p>
                        <ul>
                            <li>Livraison par mois ou par trimestre</li>
                        </ul>
                        <p className='price'>35 € / mois</p>
                    </div>
                    <IonButton>
                        S'abonner
                    </IonButton>
                </div>
                <div className='card-plans'>
                    <div>
                        <h2>Box YouDiscovery</h2>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur. Quisque malesuada blandit pretium maecenas luctus.</p>
                        <ul>
                            <li>Livraison par mois ou par trimestre</li>
                        </ul>
                        <p className='price'>15 € / mois</p>
                    </div>
                    <IonButton>
                        S'abonner
                    </IonButton>
                </div>
            </section>
        </IonContent>
    );
};

export default Plans;

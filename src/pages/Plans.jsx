import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, logo, collectionBanner } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';
import Header from '@/src/components/layout/Header';

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
            <Header/>
        
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

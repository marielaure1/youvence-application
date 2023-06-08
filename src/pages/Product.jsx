import { IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';

import { collectionBanner, addCart } from "@/assets"

import { register } from 'swiper/element/bundle';



const Collection = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    useEffect(() => {
        register();
    }, [])
    

  return (
    <IonPage>
        <IonHeader className='header-collection' slot="fixed">
            <IonToolbar>
               <div className="content">
                    <IonButton onClick={handleGoBack}>
                        <Icon icon="ph:arrow-circle-left-thin" />
                    </IonButton>
                    <IonTitle>Nom du produit</IonTitle>
                    <div className="icones">
                        {/* <Icon icon="ph:heart-light" />
                                <Icon icon="ph:shopping-cart-simple-light" /> */}
                    </div>
               </div>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <section className="banner banner-product">
                
                <swiper-container pagination="true"  pagination-dynamic-bullets="true" speed="5000" autoplay-delay="10000" loop="true" css-mode="true">
                    <swiper-slide>
                        <img src={collectionBanner} alt="Youvence" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src={collectionBanner} alt="Youvence" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src={collectionBanner} alt="Youvence" />
                    </swiper-slide>
                   
                </swiper-container>
            </section>
            <section className="details">
                <p>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus accumsan quisque egestas commodo consequat elementum. Sapien turpis sagittis tristique nunc pellentesque. </p>
                <p>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus accumsan quisque egestas commodo consequat elementum. Sapien turpis sagittis tristique nunc pellentesque. </p>

                <IonAccordionGroup>
                    <IonAccordion value="first">
                        <IonItem slot="header" color="light">
                            <IonLabel>Caractéristiques</IonLabel>
                        </IonItem>
                        <div className="ion-padding" slot="content">
                        Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus accumsan quisque egestas commodo consequat elementum. Sapien turpis sagittis tristique nunc pellentesque.
                        </div>
                    </IonAccordion>
                    <IonAccordion value="second">
                        <IonItem slot="header" color="light">
                            <IonLabel>Ingrédients</IonLabel>
                        </IonItem>
                        <div className="ion-padding" slot="content">
                        Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus accumsan quisque egestas commodo consequat elementum. Sapien turpis sagittis tristique nunc pellentesque.
                        </div>
                    </IonAccordion>
                    <IonAccordion value="third">
                        <IonItem slot="header" color="light">
                            <IonLabel>Abonnements</IonLabel>
                        </IonItem>
                        <div className="ion-padding" slot="content">
                        Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus accumsan quisque egestas commodo consequat elementum. Sapien turpis sagittis tristique nunc pellentesque.
                        </div>
                    </IonAccordion>
                </IonAccordionGroup>
            </section>
        </IonContent>
    </IonPage>
  );
};

export default Collection;

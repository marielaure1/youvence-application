import { IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Icon } from '@iconify/react';

import { collectionBanner, addCart } from "@/assets"

const Collection = () => {
    const handleGoBack = () => {
        window.history.back();
    };

  return (
    <IonPage>
        <IonHeader className='header-collection' slot="fixed">
            <IonToolbar>
               <div className="content">
                    <IonButton onClick={handleGoBack}>
                        <Icon icon="ph:arrow-circle-left-thin" />
                    </IonButton>
                    <IonTitle>Nos articles</IonTitle>
                    <div className="icones">
                        {/* <Icon icon="ph:heart-light" />
                                <Icon icon="ph:shopping-cart-simple-light" /> */}
                    </div>
               </div>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <section className="list list-products">
            <ion-grid>
                <ion-row>
                    <ion-col size="6" size-md="4" size-lg="2">
                        <IonCard class='card-product'>
                            <ion-router-link href="/posts/loreal">
                                <div className="top">
                                    <div className="img-wrapper">
                                        <img src={collectionBanner} alt="Youvence" />
                                    </div>
                                </div>

                                <ion-card-header>
                                    <IonCardTitle>Une routine parfaite pour des cheveux en bonne santé</IonCardTitle>
                                    <IonCardSubtitle>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus...</IonCardSubtitle>
                                    <ion-router-link class="btn btn-primary">
                                        Découvrir l'article
                                    </ion-router-link>
                                </ion-card-header>
                            </ion-router-link>

                        </IonCard>
                    </ion-col>
                    <ion-col size="6" size-md="4" size-lg="2">
                        <IonCard class='card-product'>
                            <ion-router-link href="/posts/loreal">
                                <div className="top">
                                    <div className="img-wrapper">
                                        <img src={collectionBanner} alt="Youvence" />
                                    </div>
                                </div>

                                <ion-card-header>
                                    <IonCardTitle>Une routine parfaite pour des cheveux en bonne santé</IonCardTitle>
                                    <IonCardSubtitle>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus...</IonCardSubtitle>
                                    <ion-router-link class="btn btn-primary">
                                        Découvrir l'article
                                    </ion-router-link>
                                </ion-card-header>
                            </ion-router-link>

                        </IonCard>
                    </ion-col>
                    <ion-col size="6" size-md="4" size-lg="2">
                        <IonCard class='card-product'>
                            <ion-router-link href="/posts/loreal">
                                <div className="top">
                                    <div className="img-wrapper">
                                        <img src={collectionBanner} alt="Youvence" />
                                    </div>
                                </div>

                                <ion-card-header>
                                    <IonCardTitle>Une routine parfaite pour des cheveux en bonne santé</IonCardTitle>
                                    <IonCardSubtitle>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus...</IonCardSubtitle>
                                    <ion-router-link class="btn btn-primary">
                                        Découvrir l'article
                                    </ion-router-link>
                                </ion-card-header>
                            </ion-router-link>

                        </IonCard>
                    </ion-col>
                    <ion-col size="6" size-md="4" size-lg="2">
                        <IonCard class='card-product'>
                            <ion-router-link href="/posts/loreal">
                                <div className="top">
                                    <div className="img-wrapper">
                                        <img src={collectionBanner} alt="Youvence" />
                                    </div>
                                </div>

                                <ion-card-header>
                                    <IonCardTitle>Une routine parfaite pour des cheveux en bonne santé</IonCardTitle>
                                    <IonCardSubtitle>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus...</IonCardSubtitle>
                                    <ion-router-link class="btn btn-primary">
                                        Découvrir l'article
                                    </ion-router-link>
                                </ion-card-header>
                            </ion-router-link>

                        </IonCard>
                    </ion-col>
                    <ion-col size="6" size-md="4" size-lg="2">
                        <IonCard class='card-product'>
                            <ion-router-link href="/posts/loreal">
                                <div className="top">
                                    <div className="img-wrapper">
                                        <img src={collectionBanner} alt="Youvence" />
                                    </div>
                                </div>

                                <ion-card-header>
                                    <IonCardTitle>Une routine parfaite pour des cheveux en bonne santé</IonCardTitle>
                                    <IonCardSubtitle>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus...</IonCardSubtitle>
                                    <ion-router-link class="btn btn-primary">
                                        Découvrir l'article
                                    </ion-router-link>
                                </ion-card-header>
                            </ion-router-link>

                        </IonCard>
                    </ion-col>
                    <ion-col size="6" size-md="4" size-lg="2">
                        <IonCard class='card-product'>
                            <ion-router-link href="/posts/loreal">
                                <div className="top">
                                    <div className="img-wrapper">
                                        <img src={collectionBanner} alt="Youvence" />
                                    </div>
                                </div>

                                <ion-card-header>
                                    <IonCardTitle>Une routine parfaite pour des cheveux en bonne santé</IonCardTitle>
                                    <IonCardSubtitle>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus...</IonCardSubtitle>
                                    <ion-router-link class="btn btn-primary">
                                        Découvrir l'article
                                    </ion-router-link>
                                </ion-card-header>
                            </ion-router-link>

                        </IonCard>
                    </ion-col>
                </ion-row>
            </ion-grid>
            </section>
        </IonContent>
    </IonPage>
  );
};

export default Collection;

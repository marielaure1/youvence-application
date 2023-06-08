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
                    <IonTitle>Nom de la collection</IonTitle>
                    <div className="icones">
                        {/* <Icon icon="ph:heart-light" />
                                <Icon icon="ph:shopping-cart-simple-light" /> */}
                    </div>
               </div>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <section className="banner banner-collection">
                <img src={collectionBanner} alt="Youvence" />
            </section>
            <section className="nouveautes background" data-color="#915946">
                <h2 className="title animation animation-bounce-letter" data-on-view="true" data-duration="10" >Nouveautés</h2>

                <IonCard class='card-collection'>
                    <ion-router-link href="/collections/loreal">
                        <img src={collectionBanner} alt="Youvence" />

                        <ion-grid>
                            <ion-row>
                                <ion-col size="7" class="title-collection">
                                    <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                                </ion-col>
                                <ion-col size="5" class="time-collection">
                                    <Icon icon="ph:timer-light" />
                                    <p>06j 05h 07m</p>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-router-link>

                </IonCard>
              <IonCard class='card-collection'>
                    <ion-router-link href="/collections/loreal">
                        <img src={collectionBanner} alt="Youvence" />

                        <ion-grid>
                            <ion-row>
                                <ion-col size="7" class="title-collection">
                                    <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                                </ion-col>
                                <ion-col size="5" class="time-collection">
                                    <Icon icon="ph:timer-light" />
                                    <p>06j 05h 07m</p>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-router-link>

                </IonCard>
              <IonCard class='card-collection'>
                    <ion-router-link href="/collections/loreal">
                        <img src={collectionBanner} alt="Youvence" />

                        <ion-grid>
                            <ion-row>
                                <ion-col size="7" class="title-collection">
                                    <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                                </ion-col>
                                <ion-col size="5" class="time-collection">
                                    <Icon icon="ph:timer-light" />
                                    <p>06j 05h 07m</p>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-router-link>

                </IonCard>
              <IonCard class='card-collection'>
                    <ion-router-link href="/collections/loreal">
                        <img src={collectionBanner} alt="Youvence" />

                        <ion-grid>
                            <ion-row>
                                <ion-col size="7" class="title-collection">
                                    <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                                </ion-col>
                                <ion-col size="5" class="time-collection">
                                    <Icon icon="ph:timer-light" />
                                    <p>06j 05h 07m</p>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-router-link>

                </IonCard>
                
            </section>

            <section className="derniers-jours background" data-color="#566D46">
                <h2 className="title animation animation-bounce-letter" data-on-view="true" data-duration="10" >Derniers jours</h2>

              <IonCard class='card-collection'>
                    <ion-router-link href="/collections/loreal">
                        <img src={collectionBanner} alt="Youvence" />

                        <ion-grid>
                            <ion-row>
                                <ion-col size="7" class="title-collection">
                                    <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                                </ion-col>
                                <ion-col size="5" class="time-collection">
                                    <Icon icon="ph:timer-light" />
                                    <p>06j 05h 07m</p>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-router-link>

                </IonCard>
              <IonCard class='card-collection'>
                    <ion-router-link href="/collections/loreal">
                        <img src={collectionBanner} alt="Youvence" />

                        <ion-grid>
                            <ion-row>
                                <ion-col size="7" class="title-collection">
                                    <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                                </ion-col>
                                <ion-col size="5" class="time-collection">
                                    <Icon icon="ph:timer-light" />
                                    <p>06j 05h 07m</p>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-router-link>

                </IonCard>
              <IonCard class='card-collection'>
                    <ion-router-link href="/collections/loreal">
                        <img src={collectionBanner} alt="Youvence" />

                        <ion-grid>
                            <ion-row>
                                <ion-col size="7" class="title-collection">
                                    <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                                </ion-col>
                                <ion-col size="5" class="time-collection">
                                    <Icon icon="ph:timer-light" />
                                    <p>06j 05h 07m</p>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-router-link>

                </IonCard>
              <IonCard class='card-collection'>
                    <ion-router-link href="/collections/loreal">
                        <img src={collectionBanner} alt="Youvence" />

                        <ion-grid>
                            <ion-row>
                                <ion-col size="7" class="title-collection">
                                    <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                                </ion-col>
                                <ion-col size="5" class="time-collection">
                                    <Icon icon="ph:timer-light" />
                                    <p>06j 05h 07m</p>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-router-link>

                </IonCard>
            </section>
               
            <section className="prochainement background" data-color="#D0E9E9">
                <h2 className="title animation animation-bounce-letter" data-on-view="true" data-duration="10" >Prochainement</h2>

              <IonCard class='card-collection'>
                    <ion-router-link href="/collections/loreal">
                        <img src={collectionBanner} alt="Youvence" />

                        <ion-grid>
                            <ion-row>
                                <ion-col size="7" class="title-collection">
                                    <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                                </ion-col>
                                <ion-col size="5" class="time-collection">
                                    <Icon icon="ph:timer-light" />
                                    <p>06j 05h 07m</p>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-router-link>

                </IonCard>
              <IonCard class='card-collection'>
                    <ion-router-link href="/collections/loreal">
                        <img src={collectionBanner} alt="Youvence" />

                        <ion-grid>
                            <ion-row>
                                <ion-col size="7" class="title-collection">
                                    <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                                </ion-col>
                                <ion-col size="5" class="time-collection">
                                    <Icon icon="ph:timer-light" />
                                    <p>06j 05h 07m</p>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-router-link>

                </IonCard>
              <IonCard class='card-collection'>
                    <ion-router-link href="/collections/loreal">
                        <img src={collectionBanner} alt="Youvence" />

                        <ion-grid>
                            <ion-row>
                                <ion-col size="7" class="title-collection">
                                    <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                                </ion-col>
                                <ion-col size="5" class="time-collection">
                                    <Icon icon="ph:timer-light" />
                                    <p>06j 05h 07m</p>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-router-link>

                </IonCard>
              <IonCard class='card-collection'>
                    <ion-router-link href="/collections/loreal">
                        <img src={collectionBanner} alt="Youvence" />

                        <ion-grid>
                            <ion-row>
                                <ion-col size="7" class="title-collection">
                                    <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                                </ion-col>
                                <ion-col size="5" class="time-collection">
                                    <Icon icon="ph:timer-light" />
                                    <p>06j 05h 07m</p>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </ion-router-link>

                </IonCard>
            </section>
        </IonContent>
    </IonPage>
  );
};

export default Collection;

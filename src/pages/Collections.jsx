import { IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Icon } from '@iconify/react';
import Header from '@/src/components/layout/Header';
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import { collectionBanner, collectionBanner2,  addCart } from "@/assets"
import React, {useState} from 'react';

const Collection = () => {
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
        <IonContent  scrollEvents={true} onIonScroll={handleScroll} style={{ 'background': backgroundColor }}>
            <Header/>
        
        <BackgroundAnimation />

            <section className="banner banner-collection">
                <img src={collectionBanner2} alt="Youvence" />
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
  );
};

export default Collection;

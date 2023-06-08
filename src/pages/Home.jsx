import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, logo, collectionBanner } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';

const Home = () => {
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
    

    useEffect(() => {
      
    }, [])
    // style={{ '--background': backgroundColor }}
    
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

            <section className="banner banner-home">
                <img src={bannerHome} alt="Youvence" />
                <h1>Youvence</h1>
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

                </IonCard>
                <IonCard class='card-collection'>
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

                </IonCard>
                <IonCard class='card-collection'>
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

                </IonCard>
                
            </section>

            <section className="article-home background" data-color="#F4C09D">
                <img src={collectionBanner} alt="Youvence" />

                <h3>Peau sèche : la comprendre, la réparer et la protéger</h3>

                <p>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus accumsan quisque egestas commodo consequat elementum. Sapien turpis sagittis tristique nunc pellentesque. </p>

                <ion-router-link class="btn btn-primary" href="/posts/loreal">
                    Découvrir l'article
                </ion-router-link>
            </section>

            <section className="derniers-jours background" data-color="#566D46">
                <h2 className="title animation animation-bounce-letter" data-on-view="true" data-duration="10" >Derniers jours</h2>

                <IonCard class='card-collection'>
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

                </IonCard>
                <IonCard class='card-collection'>
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

                </IonCard>
                <IonCard class='card-collection'>
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

                </IonCard>
                <IonCard class='card-collection'>
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

                </IonCard>
            </section>

            <section className="article-home background" data-color="#E3F0E0">
                <img src={collectionBanner} alt="Youvence" />

                <h3>Peau sèche : la comprendre, la réparer et la protéger</h3>

                <p>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus accumsan quisque egestas commodo consequat elementum. Sapien turpis sagittis tristique nunc pellentesque. </p>

                <ion-router-link class="btn btn-primary" href="/posts/loreal">
                    Découvrir l'article
                </ion-router-link>
            </section>
               
            <section className="prochainement background" data-color="#D0E9E9">
                <h2 className="title animation animation-bounce-letter" data-on-view="true" data-duration="10" >Prochainement</h2>

                <IonCard class='card-collection'>
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

                </IonCard>
                <IonCard class='card-collection'>
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

                </IonCard>
                <IonCard class='card-collection'>
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

                </IonCard>
                <IonCard class='card-collection'>
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

                </IonCard>
            </section>
        </IonContent>
    );
};

export default Home;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRouterLink, IonImg } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, logo, collectionBanner, AProposCover } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import Header from '@/src/components/layout/Header';
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
            <Header/>
        
            <BackgroundAnimation />

            <section className="banner banner-home">
                <img src={bannerHome} alt="Youvence" />
                <h1>Youvence</h1>
            </section>
            
            <section className="a-propos background" data-color="#F2AAAE">
                <h2 className="title animation animation-bounce-letter" data-on-view="true" data-duration="10" >A propos</h2>
                
                <img src={AProposCover} alt="Youvence" />

                <p>Youvence est une entreprise spécialisée dans la vente de box de soins naturels pour la peau et les cheveux à des prix réduits. Notre entreprise offre une sélection soigneusement choisie de marques renommées, proposant des produits de qualité supérieure pour votre routine de beauté</p>
                <p>En plus de nos prix attractifs, nous avons également mis en place un système d'abonnement qui permet à nos clients de bénéficier de tarifs encore plus avantageux. Chaque box est soigneusement conçue pour offrir une expérience complète de soins, comprenant des produits adaptés à différents types de peau et de cheveux.</p>
                <p>Chez Youvence, nous nous engageons à promouvoir la beauté naturelle tout en offrant des solutions abordables et pratiques pour prendre soin de vous.</p>
                <IonRouterLink  class="btn btn-primary" href="/plans">
                    Découvrir nos abonnements
                </IonRouterLink >
            </section>

            <section className="nouveautes background" data-color="#915946">
                <h2 className="title animation animation-bounce-letter" data-on-view="true" data-duration="10" >Nouveautés</h2>

                <IonCard class='card-collection'>
                    <IonRouterLink  routerLink="/collections/loreal">
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
                    </IonRouterLink >

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

                <IonRouterLink  class="btn btn-primary" href="/posts/loreal">
                    Découvrir l'article
                </IonRouterLink >
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

                <IonRouterLink  class="btn btn-primary" href="/posts/loreal">
                    Découvrir l'article
                </IonRouterLink >
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

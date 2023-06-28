import { IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle , IonItem, IonCol, IonRow, IonGrid} from '@ionic/react';
import { Icon } from '@iconify/react';
import Header from '@/src/components/layout/Header';
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import { collectionBanner, collectionBanner2,  addCart } from "@/assets"
import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import api from '@/src/api/api'
import { DateTime } from "luxon";

const Collection = () => {
    const history = useHistory();
    const [allCollections, setAllCollections] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState("");
    const [formattedDurations, setFormattedDurations] = useState([]);
    const [newCollections, setNewCollections] = useState([]);
    const [endingSoonCollections, setEndingSoonCollections] = useState([]);

    const handleScroll = (e) => {
        const ionContent = e.target;
        const sections = document.querySelectorAll('.background');
        const scrollY = e.detail.currentY;

        sections.forEach((section) => {
            const offsetTop = section.offsetTop;
            const dataColor = section.getAttribute('data-color');

            if (
              scrollY > offsetTop - window.innerHeight / 3 &&
              scrollY < offsetTop + section.offsetHeight - window.innerHeight / 3
            ) {
                setBackgroundColor(dataColor);
            } 
        });
    };

    const handleGoBack = url => {
        history.push(url);
    };

    const getAllCollectionsFetch = async () => {
        try {
            const response = await api.getCollections();

            if(response?.data?.allCollection){
                setAllCollections(response?.data?.allCollection);
            }
        } catch(error) {
            console.log(error);
        }
    }; 

    useEffect(() => {
        const countdownInterval = setInterval(() => {
          const currentDate = DateTime.local().setZone("Europe/Paris");
          const newCollections = [];
          const endingSoonCollections = [];
    
          allCollections.forEach((collection) => {
            const endDate = DateTime.fromISO(collection.limite).setZone("Europe/Paris");
            const duration = endDate.diff(currentDate);
            const formattedDuration = duration.toFormat("dd'j' hh'h' mm'm' ss's'");
    
            if (currentDate >= endDate) {
              return;
            }
    
            if (duration.as("days") < 2) {
              endingSoonCollections.push({
                ...collection,
                formattedDuration,
              });
            } else {
              newCollections.push({
                ...collection,
                formattedDuration,
              });
            }
          });
    
          setNewCollections(newCollections);
          setEndingSoonCollections(endingSoonCollections);
        }, 1000);
    
        return () => {
          clearInterval(countdownInterval);
        };
      }, [allCollections]);

     // Init
    useEffect(() => {
        getAllCollectionsFetch();
    }, []);
    
  return (
        <IonContent  scrollEvents={true} onIonScroll={handleScroll} style={{ 'background': backgroundColor }}>
            <Header/>
        
        <BackgroundAnimation />

            <section className="banner banner-collection">
                <img src={collectionBanner2} alt="Youvence" />
            </section>
            <section className="nouveautes background" data-color="#915946">
                <h2 className="title animation animation-bounce-letter" data-on-view="true" data-duration="10" >Nouveautés</h2>

                {newCollections?.map((collection, index) => (
                    <IonCard class='card-collection' key={collection.id}  onClick={() => {handleGoBack("/collections/" + collection.slug)}}>
                        <img src={collection.image} alt="Youvence" />

                        <IonGrid>
                            <IonRow>
                                <h3>{collection.title}</h3>
                               
                            </IonRow>
                            <IonRow>
                               <p>{collection.formattedDuration}</p>
                            </IonRow>
                        </IonGrid>
                    </IonCard>
                ))}
                
             
                
            </section>

            <section className="derniers-jours background" data-color="#566D46">
                <h2 className="title animation animation-bounce-letter" data-on-view="true" data-duration="10" >Derniers jours</h2>

                {endingSoonCollections?.map((collection, index) => (
                    <IonCard class='card-collection' key={collection.id}  onClick={() => {handleGoBack("/collections/" + collection.slug)}}>
                        <img src={collection.image} alt="Youvence" />

                        <IonGrid>
                            <IonRow>
                                <h3>{collection.title}</h3>
                               
                            </IonRow>
                            <IonRow>
                               <p>{collection.formattedDuration}</p>
                            </IonRow>
                        </IonGrid>
                    </IonCard>
                ))}
            </section>
               
            {/* <section className="prochainement background" data-color="#D0E9E9">
                <h2 className="title animation animation-bounce-letter" data-on-view="true" data-duration="10" >Prochainement</h2>

              <IonCard class='card-collection'  onClick={() => {handleGoBack("/collections/loreal")}}>
                 
                    <img src={collectionBanner} alt="Youvence" />

                    <IonGrid>
                        <IonRow>
                            <IonCol size="7" class="title-collection">
                                <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                            </IonCol>
                            <IonCol size="5" class="time-collection">
                                <Icon icon="ph:timer-light" />
                                <p>06j 05h 07m</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                </IonCard>
              <IonCard class='card-collection'  onClick={() => {handleGoBack("/collections/loreal")}}>
                 
                    <img src={collectionBanner} alt="Youvence" />

                    <IonGrid>
                        <IonRow>
                            <IonCol size="7" class="title-collection">
                                <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                            </IonCol>
                            <IonCol size="5" class="time-collection">
                                <Icon icon="ph:timer-light" />
                                <p>06j 05h 07m</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                </IonCard>
              <IonCard class='card-collection'  onClick={() => {handleGoBack("/collections/loreal")}}>
                 
                    <img src={collectionBanner} alt="Youvence" />

                    <IonGrid>
                        <IonRow>
                            <IonCol size="7" class="title-collection">
                                <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                            </IonCol>
                            <IonCol size="5" class="time-collection">
                                <Icon icon="ph:timer-light" />
                                <p>06j 05h 07m</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                </IonCard>
              <IonCard class='card-collection'  onClick={() => {handleGoBack("/collections/loreal")}}>
                 
                    <img src={collectionBanner} alt="Youvence" />

                    <IonGrid>
                        <IonRow>
                            <IonCol size="7" class="title-collection">
                                <h3>Une routine parfaite pour des cheveux en bonne santé</h3>
                            </IonCol>
                            <IonCol size="5" class="time-collection">
                                <Icon icon="ph:timer-light" />
                                <p>06j 05h 07m</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                </IonCard>
            </section> */}
        </IonContent>
  );
};

export default Collection;

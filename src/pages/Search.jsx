import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList, IonSearchbar } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, logo, collectionBanner, addCart } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';

const Search = () => {
    const data = [
        {
            id: 1,
            slug: "nom1",
            nom: "nom1",
            description: "description",
            price: 30,
            oldPrice: 50,
            collection: "collection"
        },
        {
            id: 2,
            slug: "nom1",
            nom: "nom1",
            description: "description",
            price: 30,
            oldPrice: 50,
            collection: "collection"
        },
      ];

      const dataArticle = [
        {
            id: 1,
            slug: "title1",
            title: "title1",
            description: "description"
        },
        {
            id: 2,
            slug: "title1",
            title: "title1",
            description: "description"
        },
      ];
      let [results, setResults] = useState([...data]);
      let [resultsArticles, setResultsArticles] = useState([...dataArticle]);
      let [searchStatus, setSearchStatus] = useState([...data]);
    
      const handleInput = (ev) => {
        let query = '';
        const target = ev.target;
        if (target) query = target.value.toLowerCase();
    
        setResults(data.filter((d) => d.toLowerCase().indexOf(query) > -1));
        setResultsArticles(dataArticle.filter((d) => d.toLowerCase().indexOf(query) > -1));
      };

      const handleChange = (e) => {
        if(e.target.value){
            
            setSearchStatus(e.target.value)
        }
      }
  
    return (
        <IonContent class='ion-content-search'>
            <IonHeader className='header-search header-static'>
                <IonToolbar>
                    <IonSegment value="produits"  onClick={handleChange}>
                        <IonSegmentButton value="produits">
                            <IonLabel>Produits</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="articles">
                            <IonLabel>Articles</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
                <IonSearchbar debounce={1000} onIonInput={(ev) => handleInput(ev)}></IonSearchbar>
            </IonHeader>

            <section className="search">
                <IonList>
                    <ion-grid>
                        <ion-row class={searchStatus == "produits" ? "active" : ""}>
                            {results.map((result) => (

                            <ion-col key={result.id}  size="6" size-md="4" size-lg="2">
                                <IonCard class='card-product'>
                                    <ion-router-link href="/products/loreal">
                                        <div className="top">
                                            <div className="img-wrapper">
                                                <img src={collectionBanner} alt="Youvence" />
                                            </div>
                                        </div>

                                        <ion-card-header>
                                            <IonCardTitle>{result.nom}</IonCardTitle>
                                            <IonCardSubtitle>{result.description}</IonCardSubtitle>
                                            <div className="content">
                                                <p className='price'>{result.price} € <span>{result.oldPrice} €</span></p>
                                                <IonButton>
                                                    <img src={addCart} alt="" />
                                                </IonButton>
                                            </div>
                                        </ion-card-header>
                                    </ion-router-link>

                                </IonCard>
                            </ion-col>
                            ))}
                       </ion-row>
                       <ion-row class={searchStatus == "articles" ? "active" : ""}>
                       {resultsArticles.map((result) => (
                            <ion-col key={result.id}  size="6" size-md="4" size-lg="2">
                                <IonCard class='card-product'>
                                    <ion-router-link href="/posts/loreal">
                                        <div className="top">
                                            <div className="img-wrapper">
                                                <img src={collectionBanner} alt="Youvence" />
                                            </div>
                                        </div>

                                        <ion-card-header>
                                            <IonCardTitle>{result.title}</IonCardTitle>
                                            <IonCardSubtitle>{result.description}</IonCardSubtitle>
                                            <ion-router-link class="btn btn-primary">
                                                Découvrir l'article
                                            </ion-router-link>
                                        </ion-card-header>
                                    </ion-router-link>

                                </IonCard>
                            </ion-col>
                        ))}
                        </ion-row>
                    </ion-grid>
                </IonList>
            </section>
        </IonContent>
    );
};

export default Search;

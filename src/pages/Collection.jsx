import { IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Icon } from '@iconify/react';
import { useHistory } from 'react-router-dom';
import { collectionBanner, collectionBanner3, addCart } from "@/assets"
import React, {useEffect, useState} from 'react';
import api from '@/src/api/api'
import { useParams } from 'react-router-dom';

const Collection = () => {
    const history = useHistory();
    const [getCollection, setCollection] = useState(null);
    const { slug } = useParams();

    const handleGoBack = url => {
        history.push(url);
        console.log(url);
    };

    const getCollectionFetch = async () => {
            
        try{
            const response = await api.getOneCollection(slug);

            console.log(response);

            if(response?.data?.showCollection){
                setCollection(response?.data?.showCollection)
            }
        } catch(error){
            console.log(error);
        }
    } 

     // Init
     useEffect( () => {
    
        getCollectionFetch()
        
    }, []);

  return (
    <IonPage>
        <IonHeader className='header-collection' slot="fixed">
            <IonToolbar>
               <div className="content">
                    <IonButton onClick={handleGoBack}>
                       <Icon icon="ph:arrow-circle-left-thin" />
                    </IonButton>
                    <IonTitle>{getCollection?.title}</IonTitle>
                    <div className="icones">
                    </div>
               </div>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <section className="banner banner-collection">
                <img src={getCollection?.image} alt="Youvence" />
            </section>
            <section className="list list-products">
            <ion-grid>
                <ion-row>
                    {getCollection?.products?.map(product => {
                    if(product.published == true){
                       return (
                        <ion-col size="6" size-md="4" size-lg="2" key={product.id}>
                        <IonCard class='card-product'>
                                <div className="top"   onClick={() => {handleGoBack(`/products/${product.slug}`)}}>
                                    <div className="img-wrapper">
                                        <img src={product.images[0]} alt="Youvence" />
                                    </div>
                                </div>

                                <IonCardHeader>
                                    <IonCardTitle   onClick={() => {handleGoBack(`/products/${product?.slug}`)}}>Box YouCare - Routine cheveux sec</IonCardTitle>
                                    <IonCardSubtitle   onClick={() => {handleGoBack(`/products/${product?.slug}`)}}>Shampoing, Après shampoing, Masque hydratant...</IonCardSubtitle>
                                    <div className="content">
                                        {/* <p className='price'>50 € <span>70 €</span></p> */}
                                        <IonButton  class="btn-commander">
                                            Commander ce produit
                                        </IonButton>
                                    </div>
                                </IonCardHeader>

                        </IonCard>
                    </ion-col>
                       )
                    }
                })}
                   
                </ion-row>
            </ion-grid>
            </section>
        </IonContent>
    </IonPage>
  );
};

export default Collection;

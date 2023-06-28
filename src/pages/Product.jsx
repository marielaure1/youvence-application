import { IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
import { Icon } from '@iconify/react';
import { useHistory } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import React, {useEffect, useState} from 'react';
import api from '@/src/api/api'
import { useParams } from 'react-router-dom';
const Product = () => {
    const history = useHistory();
    const [getProduct, setProduct] = useState(null);
    const { slug } = useParams();

    // const handleGoBack = url => {
    //     history.push(url);
    // };

    const getProductFetch = async () => {
            
        try{
            const response = await api.getOneProduct(slug);

            console.log(response);

            if(response?.data?.showProduct){
                setProduct(response?.data?.showProduct)
            }
        } catch(error){
            console.log(error);
        }
    } 

     // Init
     useEffect( () => {
    
        register()
        getProductFetch()
        
    }, []);

  return (
    <IonPage>
        <IonHeader className='header-collection' slot="fixed">
            <IonToolbar>
            {/* onClick={handleGoBack("/collections/" + getProduct?.collection?.slug)} */}
               <div className="content">
                    <IonButton >
                        <Icon icon="ph:arrow-circle-left-thin" />
                    </IonButton>
                    <IonTitle>{getProduct?.title}</IonTitle>
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
                    
                {getProduct?.images?.map((image) => (
                    <swiper-slide key={image} class="ratio-banner">
                        <img src={image} alt="Youvence" />
                    </swiper-slide>
                ))}
                
                </swiper-container>
            </section>
            <section className="details">
            <div className="content" dangerouslySetInnerHTML={{ __html: getProduct?.description }}></div>
                <IonAccordionGroup>
                    <IonAccordion value="first">
                        <IonItem slot="header" color="light">
                            <IonLabel>Composition</IonLabel>
                        </IonItem>
                        <div className="ion-padding" slot="content" dangerouslySetInnerHTML={{ __html: getProduct?.composition }}></div>
                    </IonAccordion>
                    <IonAccordion value="second">
                        <IonItem slot="header" color="light">
                            <IonLabel>Abonnement</IonLabel>
                        </IonItem>
                        <div className="ion-padding" slot="content">
                       Disponible dans le plan {getProduct?.plan?.title}.
                        </div>
                    </IonAccordion>
                    
                </IonAccordionGroup>
                
            </section>
            <IonButton  class="btn-fixed" slot='fixed'  horizontal="center" vertical="bottom">
                    Commander ce produit
                </IonButton>
        </IonContent>
    </IonPage>
  );
};

export default Product;


import { IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Icon } from '@iconify/react';
import { useHistory } from 'react-router-dom';
import {  addCart } from "@/assets"
import React, {useEffect, useState} from 'react';
import api from '@/src/api/api'
import { useParams } from 'react-router-dom';

const Products = () => {
//     const history = useHistory();
//     const [getProduct, setProduct] = useState(null);
//     const { slug } = useParams();

//     const handleGoBack = url => {
//         history.push(url);
//     };

//     const getProductFetch = async () => {
            
//         try{
//             const response = await api.getOneProduct(slug);

//             console.log(response);

//             if(response?.data?.showProduct){
//                 setProduct(response?.data?.showProduct)
//             }
//         } catch(error){
//             console.log(error);
//         }
//     } 

//      // Init
//      useEffect( () => {
    
//         getProductFetch()
        
//     }, []);


//   return (
//     <IonPage>
//         <IonHeader className='header-product' slot="fixed">
//             <IonToolbar>
//                <div className="content">
//                     <IonButton onClick={handleGoBack}>
//                         <Icon icon="ph:arrow-circle-left-thin" />
//                     </IonButton>
//                     <IonTitle>Nom de la product</IonTitle>
//                     <div className="icones">
//                         {/* <Icon icon="ph:heart-light" />
//                                 <Icon icon="ph:shopping-cart-simple-light" /> */}
//                     </div>
//                </div>
//             </IonToolbar>
//         </IonHeader>
//         <IonContent fullscreen>
//             <section className="banner banner-product">
//                 <img src={""} alt="Youvence" />
//             </section>
//             <section className="list list-products">
//             <ion-grid>
//                 <ion-row>
//                     <ion-col size="6" size-md="4" size-lg="2">
//                         <IonCard class='card-product'>
//                             <ion-router-link href="/products/loreal">
//                                 <div className="top">
//                                     <div className="img-wrapper">
//                                         <img src={""} alt="Youvence" />
//                                     </div>
//                                 </div>

//                                 <ion-card-header>
//                                     <IonCardTitle>Box YouCare - Routine cheveux sec</IonCardTitle>
//                                     <IonCardSubtitle>Shampoing, Après shampoing, Masque hydratant...</IonCardSubtitle>
//                                     <div className="content">
//                                         <p className='price'>50 € <span>70 €</span></p>
//                                         <IonButton>
//                                             <img src={addCart} alt="" />
//                                         </IonButton>
//                                     </div>
//                                 </ion-card-header>
//                             </ion-router-link>

//                         </IonCard>
//                     </ion-col>
//                     <ion-col size="6" size-md="4" size-lg="2">
//                         <IonCard class='card-product'>
//                             <ion-router-link href="/products/loreal">
//                                 <div className="top">
//                                     <div className="img-wrapper">
//                                         <img src={""} alt="Youvence" />
//                                     </div>
//                                 </div>

//                                 <ion-card-header>
//                                     <IonCardTitle>Box YouCare - Routine cheveux sec</IonCardTitle>
//                                     <IonCardSubtitle>Shampoing, Après shampoing, Masque hydratant...</IonCardSubtitle>
//                                     <div className="content">
//                                         <p className='price'>50 € <span>70 €</span></p>
//                                         <IonButton>
//                                             <img src={addCart} alt="" />
//                                         </IonButton>
//                                     </div>
//                                 </ion-card-header>
//                             </ion-router-link>

//                         </IonCard>
//                     </ion-col>
//                     <ion-col size="6" size-md="4" size-lg="2">
//                         <IonCard class='card-product'>
//                             <ion-router-link href="/products/loreal">
//                                 <div className="top">
//                                     <div className="img-wrapper">
//                                         <img src={""} alt="Youvence" />
//                                     </div>
//                                 </div>

//                                 <ion-card-header>
//                                     <IonCardTitle>Box YouCare - Routine cheveux sec</IonCardTitle>
//                                     <IonCardSubtitle>Shampoing, Après shampoing, Masque hydratant...</IonCardSubtitle>
//                                     <div className="content">
//                                         <p className='price'>50 € <span>70 €</span></p>
//                                         <IonButton>
//                                             <img src={addCart} alt="" />
//                                         </IonButton>
//                                     </div>
//                                 </ion-card-header>
//                             </ion-router-link>

//                         </IonCard>
//                     </ion-col>
//                     <ion-col size="6" size-md="4" size-lg="2">
//                         <IonCard class='card-product'>
//                             <ion-router-link href="/products/loreal">
//                                 <div className="top">
//                                     <div className="img-wrapper">
//                                         <img src={""} alt="Youvence" />
//                                     </div>
//                                 </div>

//                                 <ion-card-header>
//                                     <IonCardTitle>Box YouCare - Routine cheveux sec</IonCardTitle>
//                                     <IonCardSubtitle>Shampoing, Après shampoing, Masque hydratant...</IonCardSubtitle>
//                                     <div className="content">
//                                         <p className='price'>50 € <span>70 €</span></p>
//                                         <IonButton>
//                                             <img src={addCart} alt="" />
//                                         </IonButton>
//                                     </div>
//                                 </ion-card-header>
//                             </ion-router-link>

//                         </IonCard>
//                     </ion-col>
//                     <ion-col size="6" size-md="4" size-lg="2">
//                         <IonCard class='card-product'>
//                             <ion-router-link href="/products/loreal">
//                                 <div className="top">
//                                     <div className="img-wrapper">
//                                         <img src={""} alt="Youvence" />
//                                     </div>
//                                 </div>

//                                 <ion-card-header>
//                                     <IonCardTitle>Box YouCare - Routine cheveux sec</IonCardTitle>
//                                     <IonCardSubtitle>Shampoing, Après shampoing, Masque hydratant...</IonCardSubtitle>
//                                     <div className="content">
//                                         <p className='price'>50 € <span>70 €</span></p>
//                                         <IonButton>
//                                             <img src={addCart} alt="" />
//                                         </IonButton>
//                                     </div>
//                                 </ion-card-header>
//                             </ion-router-link>

//                         </IonCard>
//                     </ion-col>
//                     <ion-col size="6" size-md="4" size-lg="2">
//                         <IonCard class='card-product'>
//                             <ion-router-link href="/products/loreal">
//                                 <div className="top">
//                                     <div className="img-wrapper">
//                                         <img src={""} alt="Youvence" />
//                                     </div>
//                                 </div>

//                                 <ion-card-header>
//                                     <IonCardTitle>Box YouCare - Routine cheveux sec</IonCardTitle>
//                                     <IonCardSubtitle>Shampoing, Après shampoing, Masque hydratant...</IonCardSubtitle>
//                                     <div className="content">
//                                         <p className='price'>50 € <span>70 €</span></p>
//                                         <IonButton>
//                                             <img src={addCart} alt="" />
//                                         </IonButton>
//                                     </div>
//                                 </ion-card-header>
//                             </ion-router-link>

//                         </IonCard>
//                     </ion-col>
//                 </ion-row>
//             </ion-grid>
//             </section>
//         </IonContent>
//     </IonPage>
//   );
};

export default Products;

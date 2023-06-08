import { IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
import { Icon } from '@iconify/react';

import { collectionBanner, articleBanner } from "@/assets"



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
                    <IonTitle>Titre de l'article</IonTitle>
                    <div className="icones">
                        {/* <Icon icon="ph:heart-light" />
                                <Icon icon="ph:shopping-cart-simple-light" /> */}
                    </div>
               </div>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <section className="banner banner-post">
                <img src={articleBanner} alt="Youvence" />
            </section>
            <section className="details">
                <p>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus accumsan quisque egestas commodo consequat elementum. Sapien turpis sagittis tristique nunc pellentesque. </p>
                <p>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus accumsan quisque egestas commodo consequat elementum. Sapien turpis sagittis tristique nunc pellentesque. </p>

                <img src={collectionBanner} alt="Youvence" />

                <p>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus accumsan quisque egestas commodo consequat elementum. Sapien turpis sagittis tristique nunc pellentesque. </p>
                <p>Lorem ipsum dolor sit amet consectetur. Magna lacus vivamus accumsan quisque egestas commodo consequat elementum. Sapien turpis sagittis tristique nunc pellentesque. </p>

            </section>
        </IonContent>
    </IonPage>
  );
};

export default Collection;

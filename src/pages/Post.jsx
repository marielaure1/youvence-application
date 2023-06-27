import { IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
import { Icon } from '@iconify/react';
import { useHistory } from 'react-router-dom';
import { collectionBanner, articleBanner } from "@/assets"
import React, {useEffect, useState} from 'react';
import api from '@/src/api/api'
import { useParams } from 'react-router-dom';

const Post = () => {
    const [getPost, setPost] = useState(null);
    const history = useHistory();
    const { slug } = useParams();

    const handleGoBack = () => {
        history.push("/posts");
    };

    const getPostFetch = async () => {
            
        try{
            const response = await api.getOnePost(slug);

            console.log(response);

            if(response?.data?.showPost){
                setPost(response?.data?.showPost)
            }
        } catch(error){
            console.log(error);
        }
    } 

     // Init
     useEffect( () => {
    
        getPostFetch()
        
    }, []);
    
  return (
        <IonContent fullscreen>
            <IonHeader className='header-collection' slot="fixed">
            <IonToolbar>
               <div className="content">
                    <IonButton onClick={handleGoBack}>
                        <Icon icon="ph:arrow-circle-left-thin" />
                    </IonButton>
                    <IonTitle>{getPost?.title}</IonTitle>
                    <div className="icones">
                        {/* <Icon icon="ph:heart-light" />
                                <Icon icon="ph:shopping-cart-simple-light" /> */}
                    </div>
               </div>
            </IonToolbar>
        </IonHeader>
            <section className="banner banner-post">
                <img src={getPost?.image} alt="Youvence" />
            </section>
            <section className="details" dangerouslySetInnerHTML={{ __html: getPost?.body }}>
            </section>
        </IonContent>
  );
};

export default Post;

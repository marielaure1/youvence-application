import { IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonRouterLink, IonCol, IonRow, IonGrid, IonImg } from '@ionic/react';
import { Icon } from '@iconify/react';
import { useHistory } from 'react-router-dom';
import Header from '@/src/components/layout/Header';
import { collectionBanner, collectionBanner2,  addCart } from "@/assets"
import React, {useEffect, useState} from 'react';
import api from '@/src/api/api'

const Posts = () => {
    const history = useHistory();
    const [allPosts, setAllPosts] = useState(null);
    const handleGoBack = url => {
        history.push(url);
    };

    const getAllPostsFetch = async () => {
            
        try{
            const response = await api.getPosts();

            // setAllPosts(response);
            console.log(response);

            if(response?.data?.allPosts){
                setAllPosts(response?.data?.allPosts)
            }
        } catch(error){
            console.log(error);
        }
    } 

     // Init
     useEffect( () => {
    
        getAllPostsFetch()
        
    }, []);

  return (
       
    <IonContent fullscreen>
    <Header/>
        

        <section className="banner banner-collection">
            <IonImg src={collectionBanner2} alt="Youvence" />
        </section>
        <section className="list list-products">
        <IonGrid>
            <IonRow>
            {allPosts?.map( post => (
                <IonCol size="6" size-md="4" size-lg="2" key={post.id}>
                    <IonCard class='card-product card-article'  onClick={() => {handleGoBack(`/posts/${post?.slug}`)}}>

                        <IonCardContent style={{aspectRatio: "3/2"}}>
                            <img src={post?.image} alt="Youvence"/>
                        </IonCardContent>

                        <IonCardHeader>
                            <IonCardTitle>{post?.title}</IonCardTitle>
                            <IonCardSubtitle>{post?.description}</IonCardSubtitle>
                            <IonButton type="button" class="btn btn-primary">
                                Découvrir l'article
                            </IonButton>
                        </IonCardHeader>
                    </IonCard>
                </IonCol>
            ))}
            </IonRow>
        </IonGrid>
        </section>
    </IonContent>
  );
};

export default Posts;

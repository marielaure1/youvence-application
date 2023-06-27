import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonRouterLink } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, logo, collectionBanner } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';
import Header from '@/src/components/layout/Header';
import api from '@/src/api/api'
import { useHistory } from 'react-router-dom';

const Plans = () => {
    const [backgroundColor, setBackgroundColor] = useState("")
    const [allPlans, setAllPlans] = useState(null);
    const history = useHistory();

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

    const getAllPlansFetch = async () => {
            
        try{
            const response = await api.getPlans();

            // setAllPlans(response);
            console.log(response);

            if(response?.data?.allPlans){
                setAllPlans(response?.data?.allPlans)
            }
        } catch(error){
            console.log(error);
        }
    } 

    const handleSubscribe = (planId) => {
        history.push('/checkout', { planId });
    };

    // Init
    useEffect( () => {
    
        getAllPlansFetch()
        
    }, []);
    
    return (
        <IonContent scrollEvents={true} onIonScroll={handleScroll} style={{ 'background': backgroundColor }}>
            <Header/>
        
            <BackgroundAnimation />

            <IonContent class="plans background" data-color="#915946">
                {allPlans?.map( plan => (
                <IonCard class='card-plans' key={plan.id}>
                    <IonCardContent>
                        <h2>{plan?.title}</h2>
                        <p className="description" dangerouslySetInnerHTML={{ __html: plan?.description }}></p>
                        <p className='price'>{plan?.amount * 0.01} € / mois</p>
                    </IonCardContent>
                    <IonRouterLink onClick={() => handleSubscribe(plan.id)}>
                        <IonButton>S'abonner</IonButton>
                    </IonRouterLink>
                </IonCard>
                ))}
            </IonContent>
        </IonContent>
    );
};

export default Plans;

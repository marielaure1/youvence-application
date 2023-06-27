import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonRouterLink } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, logo, collectionBanner } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';
import Header from '@/src/components/layout/Header';
import api from '@/src/api/api'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ProductDisplay = () => {
      const location = useLocation();
      const planId = location.state?.planId;
      const [getCheckout, setCheckout] = useState(false)
      const [getPlans, setPlans] = useState(false)
      const history = useHistory()
      const [link, setLink] = useState("#")

      useEffect(() => {

        handlePlan()

        const fetchData = async () => {
            const userId = await me();
            
            setCheckout({
              plan_id: planId,
              user_id: userId,
            });
          };
        
          fetchData();
      }, [])

      useEffect(() => {
        console.log(getCheckout);
      }, [getCheckout])
      


      const me  = async () => {
        try{
            const response = await api.me()

            // console.log(response);

            if(response?.data?.me){
                return response?.data?.me.id
            }
            
        } catch(error){
            console.log(error);
        }
      }

      const handlePlan  = async () => {
        try{
            const response = await api.getOnePlan(planId)

            console.log(response);

            if(response?.data?.showPlan){
                setPlans(response?.data?.showPlan)
                setCheckout((...prev) => ({
                    ...prev,
                    lookup_key: getPlans?.lookup_key
                }));
            }
            
        } catch(error){
            console.log(error);
        }
      }
      
  const handlePayment = async () => {

    // console.log(getCheckout);
    try{
        const response = await api.checkout(getCheckout)

        console.log(response);
        window.location.href = `${response?.data?.session.url}`
    } catch (error){
        console.log(error);
    }
  };
  const handleCodePromo = () => {
    console.log('Effectuer le paiement');
  };
return (
<IonContent>
<Header/>

<IonContent class="checkout" >
    <IonCard class='card-checkout'>
       <IonCardContent>
            <h2>Récapitulatif de l'abonnement</h2>
            <p className="description">
                <span>Plan: </span>
                <span>{getPlans?.title}</span>
            </p>
            <p className="description">
                <span>Prix: </span>
                <span>{getPlans?.amount * 0.8 * 0.01} €</span>
            </p>
            <p className="description">
                <span><strong>Total TTC : </strong></span>
                <span>{getPlans?.amount * 0.01} € /mois</span>
            </p>

            <p className="code">
                <input type="text" placeholder='Entrez votre code promo' id="code_promo" name="code_promo"/>
                <IonButton class="btn btn-red" onClick={handleCodePromo}>
                    Appliquer
                </IonButton>
            </p>
            <p>J'accepte les conditions générale de vente</p>
        </IonCardContent>
        <IonButton expand="block" class="btn btn-red" onClick={handlePayment}>
            Payer
        </IonButton>
    </IonCard>
</IonContent>
</IonContent>
)
};
  
  const SuccessDisplay = ({ sessionId }) => {
    return (
      <section>
        <div className="product Box-root">
          {/* <Logo /> */}
          <div className="description Box-root">
            <h3>Subscription to starter plan successful!</h3>
          </div>
        </div>
        <form action="/create-portal-session" method="POST">
          <input
            type="hidden"
            id="session-id"
            name="session_id"
            value={sessionId}
          />
          <button id="checkout-and-portal-button" type="submit">
            Manage your billing information
          </button>
        </form>
      </section>
    );
  };
  
  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

const Checkout = () => {


  let [message, setMessage] = useState('');
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState('');

  const getWebHook = async () => {
    const response = await api.webHook({})

    console.log(response);
  }
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setSuccess(true);

      getWebHook()
      // setSessionId(query.get('session_id'));
    }

    if (query.get('canceled')) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [sessionId]);

  if (!success && message === '') {
    return <ProductDisplay />;
  } else if (success && sessionId !== '') {
    return <SuccessDisplay sessionId={sessionId} />;
  } else {
    return <Message message={message} />;
  }

  
};

export default Checkout;


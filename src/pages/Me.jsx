import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSegment, IonSegmentButton, IonIcon, IonButton, IonCard , IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonTextarea, IonInfiniteScroll
    ,IonInfiniteScrollContent,
    IonList, IonThumbnail } from '@ionic/react';
import { Icon } from '@iconify/react';
import { bannerHome, logo, collectionBanner } from "@/assets"
import BackgroundAnimation from '@/src/animations/BackgroundAnimation';
import React, {useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import Header from '@/src/components/layout/Header';
import api from '@/src/api/api'

const Me = () => {
    let [segementStatus, setSegementStatus] = useState("infos");
    let [displayInfos, setDisplayInfos] = useState("show");
    let [displayPassword, setDisplayPassword] = useState("show");
    let [getMe, setMe] = useState();
    let [getUpdateData, setUpdateData] = useState();
    let [getUpdateDataPassword, setUpdateDataPassword] = useState();
    let [getMessage, setMessage] = useState(false);

    const displayForm = () => {
        if(displayInfos == "show"){
            setDisplayInfos("form")
        } else{
            setDisplayInfos("show")
        }
    }

    const displayFormPassword = () => {
        if(displayPassword == "show"){
            setDisplayPassword("form")
        } else{
            setDisplayPassword("show")
        }
    }

    const [items, setItems] = useState([]);

    const generateItems = () => {
      const newItems = [];
      for (let i = 0; i < 50; i++) {
        newItems.push(`Item ${1 + items.length + i}`);
      }
      setItems([...items, ...newItems]);
    };

    const getMeFetch = async () => {
            
        try{
            const response = await api.me();

            console.log(response);

            if(response?.data?.me){
                setMe(response?.data?.me)
                setUpdateData(response?.data?.me)
            }
        } catch(error){
            console.log(error);
        }
    } 

     // Init
     useEffect( () => {
    
        getMeFetch()
        
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await api.meUpdate(getUpdateData, getMe?.id)

        console.log(response);

        if(response?.data?.updateMe){
            displayForm("show")
            getMeFetch()

            if(response?.data?.message){
                setMessage(response?.data?.message)

                setTimeout(() => {
                    setMessage(false)
                }, 5000);
            }
        }
        
    }

    const handleSubmitPassword = async (e) => {
        e.preventDefault()

        const response = await api.updatePassword(getUpdateDataPassword, getMe?.id)

        console.log(response);

        if(response?.data?.updateUser){
            getMeFetch()
            displayForm("show")


            if(response?.data?.message){
                setMessage(response?.data?.message)

                setTimeout(() => {
                    setMessage(false)
                }, 5000);
            }
        }
        
    }

    const handleChangeData = (e) => {

        const {id, value} = e.target

        setUpdateData((prev) => ({
            ...prev,
            first_name: id == "first_name" ? value : prev.first_name,
            last_name: id == "last_name" ? value : prev.last_name,
            email: id == "email" ? value : prev.email,
            phone: id == "phone" ? value : prev.phone,
            address: id == "address" ? value : prev.address,
        }))
    }

    const handleChangeDataPassword = (e) => {

        const {id, value} = e.target

        setUpdateDataPassword((prev) => ({
            ...prev,
            currentPassword: id == "currentPassword" ? value : prev?.currentPassword,
            newPassword: id == "newPassword" ? value : prev?.newPassword,
            verifPassword: id == "verifPassword" ? value : prev?.verifPassword,
        }))
    }

    useEffect(() => {
      console.log(getUpdateDataPassword);
    }, [getUpdateDataPassword])
    
    return (
        <IonContent class="ion-content-me">
             <Header headerClass="header-contact header-static" color="black"/>

            
            <section className={`contact infos ${segementStatus == "infos" ? "active" : ""}`}>
                {/* email, nom, prénom, adresse, téléphone, date */}

                <Ion-Card class={displayInfos == "show" ? "active" : ""}>
                    <Ion-Card-Header>
                        <Ion-Card-Title>
                            <span>Mes Informations Personnelles</span>
                            <Icon icon="ph:pencil-simple-light" onClick={displayForm}/>
                        </Ion-Card-Title>
                        <Ion-Card-Subtitle>Membre depuis le 21/06/2022</Ion-Card-Subtitle>
                    </Ion-Card-Header>
                    <Ion-Card-Content>
                        <p>Nom : <span>{getMe?.last_name}</span></p>
                        <p>Prénom : <span>{getMe?.first_name}</span></p>
                        <p>Email : <span>{getMe?.email}</span></p>
                        <p>Téléphone : <span className={getMe?.phone ? "" : "cl-red"}>{getMe?.phone ? getMe?.phone : "N/C"}</span></p>
                        <p>Adresse : <span className={getMe?.address ? "" : "cl-red"}>{getMe?.address ? getMe?.address : "N/C"}</span></p>
                        {getMessage && <p className='message'>{getMessage}</p>}
                    </Ion-Card-Content>
                </Ion-Card>

                {/* mot de passe et verif mdp */}
                <form onSubmit={handleSubmit} className={displayInfos == "form" ? "active" : ""}>
                    <IonInput
                        type="text"
                        fill="solid"
                        label="Nom*"
                        labelPlacement="floating"
                        helperText="Entrez votre nom"
                        value={getUpdateData?.last_name}
                        id="last_name"
                        onIonInput={handleChangeData}>
                    </IonInput>
                    <IonInput
                        type="text"
                        fill="solid"
                        label="Prénom*"
                        labelPlacement="floating"
                        helperText="Entrez votre prénom"
                        value={getUpdateData?.first_name}
                        onIonInput={handleChangeData}
                        id="first_name">
                    </IonInput>
                    <IonInput
                        type="text"
                        fill="solid"
                        label="Téléphone"
                        labelPlacement="floating"
                        helperText="Entrez votre numéro de téléphone"
                        value={getUpdateData?.phone}
                        onIonInput={handleChangeData}
                        id="phone">
                    </IonInput>
                    <IonInput
                        type="email"
                        fill="solid"
                        label="Email"
                        labelPlacement="floating"
                        helperText="Entrez un email valide"
                        errorText="Email non valide"
                        value={getUpdateData?.email}
                        onIonInput={handleChangeData}
                        id="email">
                    </IonInput>
                    <IonTextarea
                        fill="solid"
                        label="Adresse"
                        labelPlacement="floating"
                        helperText="Entrez votre adresse"
                        errorText="Adresse non valide"
                        value={getUpdateData?.address}
                        onIonInput={handleChangeData}
                        id="address">
                    </IonTextarea>
                   <div className="flex align-items-centery">
                   <IonButton class="btn-envoyer" type="submit">
                        Envoyer
                    </IonButton>
                    <IonButton class="btn-annuler" onClick={displayForm}>
                        Annuler
                    </IonButton>
                   </div>
                </form>
            </section>
            
            <section className={`contact infos ${segementStatus == "infos" ? "active" : ""}`}>
                {/* email, nom, prénom, adresse, téléphone, date */}

                <Ion-Card class={displayPassword == "show" ? "active" : ""}>
                    <Ion-Card-Header>
                        <Ion-Card-Title>
                            <span>Mot de passe</span>
                            <Icon icon="ph:pencil-simple-light" onClick={displayFormPassword}/>
                        </Ion-Card-Title>
                    </Ion-Card-Header>
                    <Ion-Card-Content>
                        <p>***********</p>
                        {getMessage && <p className='message'>{getMessage}</p>}
                    </Ion-Card-Content>
                </Ion-Card>

                {/* mot de passe et verif mdp */}
                <form onSubmit={handleSubmitPassword} className={displayPassword == "form" ? "active" : ""}>
                    <IonInput
                        type="text"
                        fill="solid"
                        label="Mot de passe actuel*"
                        labelPlacement="floating"
                        helperText="Entrez votre mot de passe actuel"
                        value={getUpdateDataPassword?.currentPassword}
                        id="currentPassword"
                        onIonInput={handleChangeDataPassword}>
                    </IonInput>
                    <IonInput
                        type="text"
                        fill="solid"
                        label="Nouveau mot de passe*"
                        labelPlacement="floating"
                        helperText="Entrez votre nouveau mot de passe"
                        value={getUpdateDataPassword?.newPassword}
                        id="newPassword"
                        onIonInput={handleChangeDataPassword}>
                    </IonInput>
                    <IonInput
                        type="text"
                        fill="solid"
                        label="Confirmation du mot de passe*"
                        labelPlacement="floating"
                        helperText="Confirmez votre mot de passe"
                        value={getUpdateDataPassword?.verifPassword}
                        id="verifPassword"
                        onIonInput={handleChangeDataPassword}>
                    </IonInput>
                   <div className="flex align-items-centery">
                   <IonButton class="btn-envoyer" type="submit">
                        Envoyer
                    </IonButton>
                    <IonButton class="btn-annuler" onClick={displayFormPassword}>
                        Annuler
                    </IonButton>
                   </div>
                </form>
            </section>

            {/* <section className={`commandes ${segementStatus == "commandes" ? "active" : ""}`}>

            <IonList>
                {items.map(item => (
                <IonCard key={item}>
                        <IonCardHeader>
                            <IonCardTitle>03/05/2023</IonCardTitle>
                            <IonCardSubtitle>Nom du produit</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <IonItem>
                                <IonThumbnail slot="start">
                                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                                </IonThumbnail>
                                <IonLabel>Produits</IonLabel>
                                <p>12 rue adresse de livraison</p>
                            </IonItem>
                          
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonList>
            <IonInfiniteScroll
                onIonInfinite={(ev) => {
                generateItems();
                setTimeout(() => ev.target.complete(), 500);
                }}
            >
                <IonInfiniteScrollContent></IonInfiniteScrollContent>
            </IonInfiniteScroll>
            
            </section>

            <section className={`abonnements ${segementStatus == "abonnements" ? "active" : ""}`}>
                <p>Abonnements</p>
            </section> */}

            
        </IonContent>
    );
};

export default Me;

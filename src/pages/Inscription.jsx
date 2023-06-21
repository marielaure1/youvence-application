import { IonContent, IonButton, IonCard, IonInput} from '@ionic/react'
import { inscriptionVideo } from "@/assets"
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import api from '@/src/api/api'
import { registerSuccess, registerFail } from '@/src/api/store'

let dataForm = {
    last_name: "",
    first_name: "",
    email: "",
    password: "",
    verifPassword: "",
}
const Inscription = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")
    const [userDatas, setUserDatas] = useState(dataForm)
    const [userDatasErrors, setUserDatasErrors] = useState(dataForm)
    const history = useHistory()
  
    const handleChange = (e) => {
        let {id, value} = e.target

        setUserDatas((prev) => ({
            ...prev,
            last_name: id == "last_name" ? value : prev.last_name,
            first_name: id == "first_name" ? value : prev.first_name,
            email: id == "email" ? value : prev.email,
            password: id == "password" ? value : prev.password,
            verifPassword: id == "verifPassword" ? value : prev.verifPassword
        }))


    }
    const handleRegister = async (e) => {
        e.preventDefault()

        console.log("test");
        
        try{
            const response = await api.register(userDatas)
            let data = response?.data

            console.log(response);

            if(data?.error){
                setUserDatasErrors((prev) => ({
                    ...prev,
                    last_name: data.error.last_nameError ? data.error.last_nameError : "",
                    first_name: data.error.first_nameError ? data.error.first_nameError : "",
                    email: data.error.emailError ? data.error.emailError : "",
                    password: data.error.passwordError ? data.error.passwordError : "",
                    verifPassword: data.error.verifPasswordError ? data.error.verifPasswordError : ""
                }))

            } else if(data?.token){
                dispatch(registerSuccess(data.token))
                history.push('/')
            } else if(data?.message){
                setMessage(data.message)
            }
  
        } catch(error){
            dispatch(registerFail(error))
            console.log(error)
            
            setMessage("Une erreur c'est produite.")
        }  
    }

    useEffect(() => {
      console.log(userDatas);
    }, [userDatas])
    
  
    return (
        <IonContent class="connexion">
         
            <video autoPlay loop muted src={inscriptionVideo}></video>

            <IonCard class="form">
                <form onSubmit={handleRegister}>
                    <h1>Inscrivez-vous</h1>
                    <IonInput
                        className=""
                        type="text"
                        fill="solid"
                        label="Nom"
                        labelPlacement="floating"
                        id="last_name"
                        helperText={userDatasErrors.last_name}
                        onIonInput={handleChange}>
                    </IonInput>
                    <IonInput
                        className=""
                        type="text"
                        fill="solid"
                        label="Prénom"
                        labelPlacement="floating"
                        id="first_name"
                        helperText={userDatasErrors.first_name}
                        onIonInput={handleChange}>
                    </IonInput>
                    <IonInput
                        className=""
                        type="email"
                        fill="solid"
                        label="Email"
                        labelPlacement="floating"
                        id="email"
                        helperText={userDatasErrors.email}
                        onIonInput={handleChange}>
                    </IonInput>
                    <IonInput
                        className=""
                        type="password"
                        fill="solid"
                        label="Mot de passe"
                        labelPlacement="floating"
                        id="password"
                        helperText={userDatasErrors.password}
                        onIonInput={handleChange}>
                    </IonInput>
                    <IonInput
                        className=""
                        type="password"
                        fill="solid"
                        label="Confirmer le mot de passe"
                        labelPlacement="floating"
                        id="verifPassword"
                        helperText={userDatasErrors.verifPassword}
                        onIonInput={handleChange}>
                    </IonInput>

                    {message && <p className='errorMessage'>{ message }</p>}
                    <IonButton class="btn-envoyer" type="submit">
                        S'inscrire
                    </IonButton>

                    <ion-router-link class="link-form" href="/connexion">Vous avez déjà un compte ? Connectez-vous !</ion-router-link>
                </form>
            </IonCard>
        </IonContent>
    )
}

export default Inscription

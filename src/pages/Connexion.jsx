import { IonContent, IonButton, IonCard, IonInput } from '@ionic/react'
import { connexionVideo } from "@/assets"
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import api from '@/src/api/api'
import { loginSuccess, loginFail } from '@/src/api/store'

let dataForm = {
    email: "",
    password: ""
}

const Connexion = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")
    const [identifiants, setIdentifiants] = useState(dataForm)
    const [identifiantsErrors, setIdentifiantsErrors] = useState(dataForm)
    const history = useHistory()
  
    const handleChange = (e) => {
        let {id, value} = e.target

        setIdentifiants((prev) => ({
            ...prev,
            email: id == "email" ? value : prev.email,
            password: id == "password" ? value : prev.password
        }))

    }
    const handleLogin = async (e) => {
        e.preventDefault()
        
        try{
            const response = await api.login(identifiants)
           

            if(response?.data?.errors){
                setIdentifiantsErrors((prev) => ({
                    ...prev,
                    email: response?.data?.errors.emailError ? response?.data?.errors.emailError : "Entrez votre email",
                    password: response?.data?.errors.passwordError ? response?.data?.errors.passwordError : "Entrez votre mot de passe"
                }))
            } else if(response?.data?.message){
                setMessage(response?.data?.message)
            } else if(response?.data?.token){
                dispatch(loginSuccess(response?.data?.token))
                history.push('/')
            }
  
        } catch(error){
            dispatch(loginFail(error))
            console.log(error)
            setMessage("Une erreur c'est produite.")
        }  
    }
  
    return (
        <IonContent class="connexion">
         
            <video autoPlay loop muted src={connexionVideo}></video>


            <IonCard class="form">
                <form onSubmit={handleLogin}>
                    <h1>Connectez-vous</h1>
                    <IonInput
                        className=""
                        id="email"
                        type="email"
                        fill="solid"
                        label="Email"
                        labelPlacement="floating"
                        helperText={identifiantsErrors.email}
                        onIonInput={handleChange}>
                    </IonInput>
                    <IonInput
                        className=""
                        type="password"
                        id="password"
                        fill="solid"
                        label="Mot de passe"
                        labelPlacement="floating"
                        helperText={identifiantsErrors.password}
                        errorText="Email non valide"
                        onIonInput={handleChange}>
                    </IonInput>

                    {message && <p className='errorMessage'>{ message }</p>}

                    <ion-router-link class="mdp-oublie">Mot de passe oublié ?</ion-router-link>               

                    <IonButton class="btn-envoyer"  type="submit">
                        Se connecter
                    </IonButton>

                    <ion-router-link class="link-form" href="/inscription">Vous n'avez pas de compte ? Inscrivez-vous !</ion-router-link>
                </form>
            </IonCard>
        </IonContent>
    )
}

export default Connexion

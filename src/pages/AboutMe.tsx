import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonButton, IonImg } from '@ionic/react';
import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My Portfolio</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <IonText style={{ fontSize: '24px', fontWeight: 'bold' }}>Consulta mi portfolio en el siguiente link</IonText><br /><br /><br />
                    <IonButton className='botonsito' href="https://main--astounding-druid-555a0f.netlify.app/" target='__blank' style={{ fontSize: '16px', marginTop: '20px' }}>Portfolio de Eloy Pérez hecho con Astro</IonButton>
                </div>
                <br /><br />
                <div className='contenedorImg'>
                    <IonImg className='imagen' src="../../public/Em2.png" alt="Imagen de Ionic" />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default AboutMe;
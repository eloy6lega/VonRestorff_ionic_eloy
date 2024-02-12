import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

const ErrorPage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <img src="https://www.orientadorweb.com/wp-content/uploads/2014/02/C%C3%B3digos-de-estado-HTTP-Posicionamiento-web-op3.png" alt="Imagen de error" />
            <br />
            <IonCard style={{width: '50%', margin: '0 auto', borderRadius: '50px'}}>
                <div style={{ backgroundColor: '#E4041C' }}>
                <IonCardHeader>
                    <IonCardTitle style={{ color: 'white' }}><strong>ERROR</strong></IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Vaya, parece que ha ocurrido un error</h1>
                    <br />
                    <h2 style={{ fontSize: '18px', marginTop: '20px', color: 'white' }}>La ruta que estás buscando posiblemente NO exista, prueba con otra ;)</h2>
                    <br />
                </IonCardContent>
                </div>
            </IonCard>
            
        </div>      
    );
};

export default ErrorPage;
import React from 'react';
import { IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './effect.css';

const Effect: React.FC = () => {
    return (
        <IonPage>
            <IonToolbar>
                <IonTitle>El Effect Von Restorff</IonTitle>
            </IonToolbar>
            <IonContent className='cuerpo'>
                <div style={{margin: '0 auto', textAlign: 'center'}}>
                    <br />
                    <h2>A continuación vemos algunos ejemplos de el Effect Von Restorff</h2>
                    <br /><br />
                    <p>Ejemplo 1 - Cuadrados VS Bola</p>
                    <img src="https://lawsofux.com/es/efecto-von-restorff/social.png" alt="Ejemplo 1" style={{ width: '800px', margin: '10px', borderRadius: '80px' }} />
                    <p>Ejemplo 2 - Los elefantes</p>
                    <img src="https://cro.school/wp-content/uploads/2021/04/2021-04-15_17h45_28-1024x768.png" alt="Ejemplo 2" style={{ width: '800px', margin: '10px', borderRadius: '80px' }} />
                    <p>Ejemplo 3 - El pájaro</p>
                    <img src="https://media.licdn.com/dms/image/D4D12AQFt2Rg-6FK6Hw/article-cover_image-shrink_720_1280/0/1692193626338?e=2147483647&v=beta&t=1bv6On6CmApOGCYsXkQi_C4PsO8lowOEx_ceTfJrZ2w" alt="Ejemplo 3" style={{ width: '800px', margin: '10px', borderRadius: '80px' }} />
                    <p>Ejemplo 4 - Sneakers</p>
                    <img src="https://www.analitico.pro/wp-content/uploads/2023/01/Efecto-Von-Restorff-hero.png" alt="Ejemplo 4" style={{ width: '800px', margin: '10px', borderRadius: '80px' }} />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Effect;
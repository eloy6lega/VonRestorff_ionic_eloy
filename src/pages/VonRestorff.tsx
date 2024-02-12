import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText, IonGrid, IonRow, IonCol } from '@ionic/react';
import './VonRestorff.css';

const VonRestorff: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Von Restorff</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="6">
                            <IonImg className='img' src="https://www.neurexplore.com/images/Hedwig-Von-Restorff-effetto.jpg" style={{ width: '100%' }} />
                        </IonCol>
                        <IonCol size="6">
                            <IonText>
                                <br />
                                <br />
                                <h3>En 1933, la psiquiatra y pediatra alemana Hedwig von Restorff acuñó la teoría del efecto Von Restorff. Realizó un estudio donde presentaba a los usuarios una lista de elementos muy parecidos junto a un elemento distinto. Comprobó que los sujetos recordaban con mayor facilidad el elemento diferencial de la lista.</h3>
                                <br />
                                <h3>Nosotros veremos este efecto en el apartado "The Effect". Podremos ver distintos ejemplos de este efecto.</h3>
                                <br />
                                <h3>A continuación, expondremos <strong>¿qué es el efecto Von Restorff?</strong></h3>
                                <h3>El efecto de von Restorff, también conocido como efecto de aislamiento, describe cómo es más probable recordar elementos que destacan en comparación con otros dentro de un grupo.</h3>
                                <h3>Fue descubierto por Hedwig von Restorff en 1933, quien observó que elementos con características distintivas, como color o forma, eran más memorables.</h3>
                                <h3>Esto desafió la creencia anterior de que la atención era la única razón detrás de la memorabilidad. Investigaciones posteriores, como las de Emanuel Donchin y Monica Fabiani en 1995, respaldaron la idea de que la memoria codifica información diferente de manera distintiva.</h3>
                                <h3>En resumen, cuando se presenta una lista de elementos comunes, la inclusión de uno que se desvía de la norma hace que sea más probable que se recuerde a largo plazo.</h3>                                
                            </IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default VonRestorff;
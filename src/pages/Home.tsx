import React from 'react';
import './home.css';

const Home: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>El efecto de Von Restorff</h1>
            <p style={{ fontSize: '16px', marginTop: '20px' }}>Vamos a adentrarnos en el mundo del efecto de Von Restorff.</p>
            <p style={{ fontSize: '16px', marginTop: '20px' }}>Para entenderlo mejor, navegaremos a través de las páginas laterales para conocer más sobre este efecto.</p>
            <br />
            <div style={{ marginTop: '-10px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', justifyContent: 'center', width: '600px', margin: '0 auto'}}>
                <img src="https://www.fotocasion.es/media/img/articulos/54196.jpg" alt="" style={{ maxWidth: '200px', height: '200px' }} /> 
                <img src="https://www.fotocasion.es/media/img/articulos/54196.jpg" alt="" style={{ maxWidth: '200px', height: '200px' }} /> 
                <img src="https://www.fotocasion.es/media/img/articulos/54196.jpg" alt="" style={{ maxWidth: '200px', height: '200px' }} /> 
                <img src="https://www.fotocasion.es/media/img/articulos/54196.jpg" alt="" style={{ maxWidth: '200px', height: '200px' }} /> 
                <img src="https://www.fotocasion.es/media/img/articulos/54196.jpg" alt="" style={{ maxWidth: '200px', height: '200px' }} /> 
                <img className="box" src="https://www.neurexplore.com/images/Hedwig-Von-Restorff-effetto.jpg" alt="" style={{ marginLeft: '20px', maxWidth: '400px', height: '200px', borderRadius: '50% 40px' }} />
                <img src="https://www.fotocasion.es/media/img/articulos/54196.jpg" alt="" style={{ maxWidth: '200px', height: '200px' }} /> 
                <img src="https://www.fotocasion.es/media/img/articulos/54196.jpg" alt="" style={{ maxWidth: '200px', height: '200px' }} /> 
                <img src="https://www.fotocasion.es/media/img/articulos/54196.jpg" alt="" style={{ maxWidth: '200px', height: '200px' }} /> 
            </div>
            
        </div>
    );
};

export default Home;
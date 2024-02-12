import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Execute script here
        alert('Datos enviados');
        window.location.reload();
    };

    return (
        <div>
            <br /><br />
            <h1 style={{margin: '0 auto', textAlign: 'center'}}>Contáctame con el siguiente formulario: </h1><br /><br />

            <div style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', justifyContent: 'center', width: '600px', margin: '0 auto'}}>
                <img src="https://i.scdn.co/image/ab67616d00001e02e0828be3fae51e3fb4def483" alt="" style={{ maxWidth: '250px', height: '250px' }} /> 
                <img src="https://i.scdn.co/image/ab67616d00001e02e0828be3fae51e3fb4def483" alt="" style={{ maxWidth: '250px', height: '250px' }} /> 
                <img src="https://i.scdn.co/image/ab67616d00001e02e0828be3fae51e3fb4def483" alt="" style={{ maxWidth: '250px', height: '250px' }} /> 
                <img src="https://i.scdn.co/image/ab67616d00001e02e0828be3fae51e3fb4def483" alt="" style={{ maxWidth: '250px', height: '250px' }} /> 
                <div style={{ width: '100%', height: '256px', border: '1px solid darkgreen', borderRadius: '20px' }}>
                    <form onSubmit={handleSubmit} style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '20px', width: '250px',  }}>
                        <label style={{ marginBottom: '10px' }}>
                            Nombre:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ marginLeft: '10px' }} />
                        </label>
                        <br /><br />
                        <label style={{ marginBottom: '10px' }}>
                            Teléfono:
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ marginLeft: '10px' }} />
                        </label>
                        <br /><br />
                        <label style={{ marginBottom: '10px' }}>
                            Correo:
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginLeft: '10px' }} />
                        </label>
                        <br /><br />
                        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Enviar</button>
                    </form>
                </div>
                <img src="https://i.scdn.co/image/ab67616d00001e02e0828be3fae51e3fb4def483" alt="" style={{ maxWidth: '250px', height: '250px' }} /> 
                <img src="https://i.scdn.co/image/ab67616d00001e02e0828be3fae51e3fb4def483" alt="" style={{ maxWidth: '250px', height: '250px' }} /> 
                <img src="https://i.scdn.co/image/ab67616d00001e02e0828be3fae51e3fb4def483" alt="" style={{ maxWidth: '250px', height: '250px' }} /> 
                <img src="https://i.scdn.co/image/ab67616d00001e02e0828be3fae51e3fb4def483" alt="" style={{ maxWidth: '250px', height: '250px' }} /> 
            </div>

        </div>        
    );
};

export default Contact;
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const ComponentB = ( {contacto} ) => {
    const [on, setOn] = useState(false);
    
    return (
        <div>
            <h1>Nombre: {contacto.name} {contacto.lastName}</h1>
            <h2>Email: {contacto.email}</h2> 
            <h3>{on===true ? `Contacto en linea` : `Contacto no disponible`}</h3>
            <button onClick={() => setOn(!on)}>{on === false ? 'Conectado' : 'Desconectado'}</button>
        </div>
    );
};


ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contact),

};


export default ComponentB;

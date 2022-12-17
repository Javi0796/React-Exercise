import React from 'react';
import ComponentB from './componentB';
import { Contact } from '../models/contact.class';


const ComponentA = () => {
    const defaultContact = new Contact("Javier", "Ríos", "Javirios961107@gmail.com", "false")
    return (
        <div>
            <ComponentB contacto={defaultContact}></ComponentB>
        </div>
    );
};

export default ComponentA;

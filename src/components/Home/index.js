import React from 'react';
import Infotitle from '../Infotitle';
import Resume from './Resume';

export default function index() {
    return (
        <div>
            <Infotitle 
                title="Conner McBride" 
                text = "
                Welcome to my portfolio, where you can learn a few things about me and explore a few of my created pages. Also view my resume furthermore I am a Contract Administrative Manager and United States Army Veteran leveraging over four years of proven experience in operational procedures and processes associated with contractual arrangements and agreements. I am currently a student at the University of Texas coding boot camp. I am working on my Full Stack Web Developer Certification. Please check out my portfolio as it is dynamically changing."
            />
            <Resume/>
        </div>
    )
}

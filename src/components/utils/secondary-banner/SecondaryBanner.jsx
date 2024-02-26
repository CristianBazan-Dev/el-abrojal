import React from 'react';
import './secondaryBanner.css'
import { Link } from 'react-router-dom';

function SecondaryBanner(props) {
    return (
        <section className='secondary-banner'>
            <h2>Para consultas personalizadas</h2>
            <Link>
            Aquí
            </Link>
        </section>
    );
}

export default SecondaryBanner;
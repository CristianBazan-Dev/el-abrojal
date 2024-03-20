import React from 'react';
import './secondaryBanner.css'
import { Link } from 'react-router-dom';

function SecondaryBanner(props) {
    return (
        <section className='secondary-banner'>
            <h2>Para consultas personalizadas</h2>
            <Link
              to="https://walink.co/5f6a74"
              target="_blank"
              className="button"
            >
              Aquí
            </Link>
        </section>
    );
}

export default SecondaryBanner;
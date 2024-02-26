import React from 'react';
import './sectionBanner.css'

function SectionBanner({title, img}) {
    return (
        <section className='sections-banner' style={{background: `url(${img})`}}>
            <h2>{title}</h2>
        </section>
    );
}

export default SectionBanner;
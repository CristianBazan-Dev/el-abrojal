import React from 'react';
import './sectionBanner.css'

function SectionBanner({title, img}) {
    console.log(title)
    return (
        <section className='sections-banner' style={{background: `url(${img})`}}>
            <h2>{title}</h2>
        </section>
    );
}

export default SectionBanner;
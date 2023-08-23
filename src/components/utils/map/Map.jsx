import React from 'react';
import './map.css'

function Map(props) {
    return (
        <div className='map-section'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13447.040328061528!2d-62.8257793!3d-32.5859219!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc093eb5327df1%3A0xba5ee4ea4e33c5cd!2sMetalurgica%20El%20Abrojal!5e0!3m2!1ses-419!2sar!4v1692787124976!5m2!1ses-419!2sar" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='map-frame'></iframe>
        </div>
    );
}

export default Map;
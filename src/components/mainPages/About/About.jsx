import React, { useEffect } from 'react';
import WhyUs from '../../utils/whyUs/WhyUs';
import History from '../../utils/history/History';

function About(props) {
    // const scroll = () => {
    //     window.addEventListener("scroll", reveal);


    //    function reveal() {
    //     const reveals = document.querySelectorAll('.reveal')


    //     for (var i = 0; i < reveals.length; i++) {
    //         var windowHeight = window.innerHeight;
    //         var revealtop = reveals[i].getBoundingClientRect().top;
    //         var revealpoint = 10;
    
    //         if (revealtop < windowHeight - revealpoint) {
    //           reveals[i].classList.add("active");
    //         } else {
    //           reveals[i].classList.remove("active");
    //         }
    //       }
    //    }
    // }


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
        <section >
            <History />
        </section>
    );
}

export default About;
import React from "react";
import './About.css';
import AboutChef1 from '../utils/img/Chef.jpg';

import { ImageGallery } from "../components/ImageGallery";
import { Reviews } from "../components/Reviews";




function About() {
    return (
        <div className=" about-page">
        <header className="mt-5">
            <div className="container h-100 d-flex
            align-items-center justify-content-center">
                <h1 className="text-light">About</h1>
            </div>
        </header>
        <div className="container my-5">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quibusdam tempora optio hic provident minima, perspiciatis dolor nemo, quae dignissimos ad sequi, corporis autem non qui. Magni nesciunt atque cupiditate.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nulla optio numquam dolorum architecto possimus ullam, recusandae nemo nostrum quibusdam. Amet tenetur, facere magni quas perspiciatis provident ut beatae consequuntur?</p>

            <div className="row">
                <div className="col=lg-6">
                    <img  src={AboutChef1} className="img-fluid my-4"   alt="chef"/>
                    
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, maiores vero, enim quae cupiditate consectetur laudantium unde accusantium ducimus vel cumque nobis repellendus magnam dolorem consequatur laboriosam reiciendis voluptatum fugiat.</p>
        </div>
        <div className="bg-dark text-light">
            <ImageGallery />

        </div>
        <div className="my-5">
            <Reviews />
        </div>
        </div>
    )
}

export default About;
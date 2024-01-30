import React from "react";
import Gallery1 from '../utils/img/men-1.jpeg';
import Gallery2 from '../utils/img/men-2.jpeg';
import Gallery3 from '../utils/img/men-3.jpeg';
import Gallery4 from '../utils/img/men-4.jpeg';
import Gallery5 from '../utils/img/men-5.jpeg';
import Gallery6 from '../utils/img/men-6.jpeg';

export function ImageGallery() {
    return (
        <div className="container py-5">
            <h2 className="text-center fs-1 mb-5 text-uppercase
            fm-bold">Image Gallery</h2>
            <div className="row">
                <div className="col-mb-4 px-2">
                    <div className="my-3">
                        <img src={Gallery1} className="img-fluid" alt=""/>
                        </div>
                        <div className="my-3">
                        <img src={Gallery2} className="img-fluid" alt=""/>
                        </div>
                        <div className="my-3">
                        <img src={Gallery3} className="img-fluid" alt=""/>
                        </div>
                        <div className="my-3">
                        <img src={Gallery4} className="img-fluid" alt=""/>
                        </div>
                        <div className="my-3">
                        <img src={Gallery5} className="img-fluid" alt=""/>
                        </div>
                        <div className="my-3">
                        <img src={Gallery6} className="img-fluid" alt=""/>
                        </div>

                </div>

            </div>
        </div>
    )

}

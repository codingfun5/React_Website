import React from "react";
import Gallery1 from '../utils/img/Basilico1.jpg';


export function ImageGallery() {
    return (
        <div className="container py-5">
            <h2 className="text-center fs-1 mb-5 text-uppercase
            fm-bold">Image Gallery</h2>
            <div className="row">
                <div className="col-mb-4 px-2">
                    <div className="my-3">
                        <img src={Gallery1} className="img-fluid  " alt="" />
                        </div>
                        </div>

                </div>

            </div>
       
    )

}

import React from "react";
import { MenuBtn } from "../components/MenuBtn";
import './Home.css';
import AboutImg from '../utils/img/coffee.jpg';
import { Link } from 'react-router-dom';
import { ImageGallery } from "../components/ImageGallery";
import { ContactInfo } from "../components/ContactInfo";
import ContactImage from '../utils/img/logo1.png'

function Home() {
    return (
        <div className="home-page">
            <header className="h-100 min-vh-100 d-flex align-items-center
             text-light shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 d-flex d-sm-block
                        flex-column align-items-center">
                            <h2 className="mb-0 text-black
                            fm-bold">Welcome To</h2>
                            <h1 className="mb-5 text-black fm-bold
                            text-center text-sm-start">Restaurant</h1>
                                <MenuBtn />
                        </div>

                    </div>
                </div>

            </header>
            <div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-6 d-flex
                        justify-content-center d-none
                        d-lg-flex">
                            <img src={AboutImg} className="img-fluid w-50"
                                alt="about img" />
                            </div>
                        <div className="col-lg-6 d-flex
                        flex-column align-items-center
                        justify-content-center">
                            <h2 className="fs-1 mb-5 text-uppercase fm-bold">About Us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero ab, quo dolores dignissimos consectetur suscipit nesciunt ea perferendis in asperiores fuga eius, ratione repudiandae harum nam accusamus voluptates nulla!</p>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque vitae pariatur. Error amet cumque magnam animi eius asperiores eveniet sapiente. Cupiditate explicabo amet molestias aliquam. Assumenda molestias quibusdam voluptate?</p>
                            <Link to="/about">
                                <button type="button" className="btn btn-outline-success btn-lg">More About Us</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="menu-section py-5 text-light-shadow">
                <div className="container d-flex flex-column
                align-items-center">
                    <h2 className="fs-1 mb-5 text-uppercase fm-bold text-light ">Our Favorites</h2>
                    <div  className="row mb-5 w-100">
                        <div className="col-lg-6 d-flex
                        flex-column align-items-center mb-5 mb-lg-0">
                            <h3 className="fs-2 mb-5 text-light">Food</h3>
                            <ul className="px-0">
                                <li className="d-flex
                                justify-content-between">
                                    <p className="fs-3 mx-2 text-light">English Breakfast</p>
                                    <p className="fs-3 mx-2 text-success
                                    fm-bold">$12</p>
                                    </li>
                                    <li className="d-flex
                                justify-content-between">
                                    <p className="fs-3 mx-2 text-light">Spicy Beef</p>
                                    <p className="fs-3 mx-2 text-success
                                    fm-bold ">$15</p>
                                    </li>
                                    <li className="d-flex
                                justify-content-between">
                                    <p className="fs-3 mx-2 text-light">Spaghetti Bolognese</p>
                                    <p className="fs-3 mx-2 text-success
                                    fm-bold">$11</p>
                                    </li>
                                    </ul>

                        </div>
                            <div className="col-lg-6 d-flex
                        flex-column align-items-center mb-5 mb-lg-0">
                            <h3 className="fs-2 mb-5 text-light">Drinks</h3>
                            <ul className="px-0">
                                <li className="d-flex
                                justify-content-between">
                                    <p className="fs-3 mx-2 text-light">Coffee</p>
                                    <p className="fs-3 mx-2 text-success
                                    fm-bold">$2</p>
                                    </li>
                                    <li className="d-flex
                                justify-content-between">
                                    <p className="fs-3 mx-2 text-light">Juice</p>
                                    <p className="fs-3 mx-2 text-success
                                    fm-bold">$1</p>
                                    </li>
                                    <li className="d-flex
                                justify-content-between">
                                    <p className="fs-3 mx-2 text-light">Spirits</p>
                                    <p className="fs-3 mx-2 text-success
                                    fm-bold">$5</p>
                                    </li>
                                    </ul>

                        </div>
                    </div>
                   <MenuBtn />
                </div>

            </div>
            <ImageGallery />
            <div className="bg-dark text-light py-5 shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column
                        align-item-center justify-content-center mb-5
                        mb-lg-0">
                            <ContactInfo />

                        </div>
                        <div className="col-lg-6 d-flex">
                            <img src={ContactImage} className="img-fluid w-50" alt=""/>
                        </div>

                    </div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Home;